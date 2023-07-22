import postPromptQuestion from "@/apis/post-prompt-question";
import { useStore } from "@/store/store";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import { Dispatch, KeyboardEvent, SetStateAction, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

export default function PromptInputBox() {
  const [text, setText] = useState("");
  const { toggleDeIdentificationPopup, addChatData, setChatData } = useStore();

  const askQuestionMutation = useMutation(postPromptQuestion, {
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      alert("사용중 문제 발생");
    },
  });

  const handleSend = async () => {
    const chatId = Date.now();

    // Add user's message to chat
    setChatData((oldChatData) => [
      ...oldChatData,
      {
        id: chatId,
        user: "user",
        message: text,
        timestamp: new Date().toISOString(),
      },
    ]);

    const response = await fetch("https://api.seity.co.kr/prompt/ask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({
        sessionId: "",
        question: text,
      }),
    });

    const reader = response.body!.getReader();
    let aiRes = "";

    const processStream = ({ done, value }: any) => {
      if (done) {
        setChatData((oldChatData) => [
          ...oldChatData,
          {
            id: chatId,
            user: "ai",
            message: aiRes,
            timestamp: new Date().toISOString(),
          },
        ]);
        return;
      }

      aiRes += new TextDecoder("utf-8").decode(value);
      console.log(aiRes);
      reader.read().then(processStream);
    };

    reader.read().then(processStream);
  };

  const handleOnKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && e.shiftKey) return;
    if (e.key === "Enter") {
      e.preventDefault();
      if (text.length > 0) {
        handleSend();
      }
    }
  };
  return (
    <div className="w-full min-h-[100px] flex justify-center items-center bg-prompt-ai-select-bg">
      <div className="flex items-center bg-blackbg-default w-full xl:w-[768px] md:mx-7 min-h-[58px] rounded-xl my-5">
        <TextareaAutosize
          value={text}
          onChange={(text) => setText(text.target.value)}
          maxRows={7}
          placeholder="Send a message"
          className="w-full resize-none px-5 focus:border-transparent outline-none my-4"
          onKeyPress={handleOnKeyPress}
        />
        <button onClick={toggleDeIdentificationPopup}>
          <Image
            src="/chat-file.svg"
            width="32"
            height="32"
            alt="파일 첨부"
            className="mr-2"
          />
        </button>
        <button
          className={`mx-3 w-[76px] h-[38px] rounded-md ${
            text.length > 0
              ? "bg-blackbg-point text-whitebg-default"
              : "bg-blackbg-serve text-whitebg-disable"
          }`}
          onClick={handleSend}
        >
          send
        </button>
      </div>
    </div>
  );
}
