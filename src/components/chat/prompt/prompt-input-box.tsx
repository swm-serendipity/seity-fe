import { useStore } from "@/store/store";
import Image from "next/image";
import { KeyboardEvent, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

export default function PromptInputBox() {
  const [text, setText] = useState("");
  const {
    toggleDeIdentificationPopup,
    addChatData,
    setChatData,
    chatSessionId,
    toggleIsAnswering,
  } = useStore();

  const handleSend = async () => {
    const chatId = Date.now();

    // 유저 채팅 추가
    addChatData({
      id: "user-" + chatId,
      user: "user",
      message: text,
      timestamp: new Date().toISOString(),
    });

    setText("");
    toggleIsAnswering();
    addChatData({
      id: "ai-" + chatId,
      user: "ai",
      message: "",
      timestamp: new Date().toISOString(),
    });

    // fetch를 사용하여 요청을 보냅니다.
    const response = await fetch("https://api.seity.co.kr/prompt/ask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({
        sessionId: chatSessionId ? chatSessionId : undefined,
        question: text,
      }),
    });

    if (!response.ok) {
      console.log("Response is not OK");
      toggleIsAnswering();
      return;
    }

    let aiRes = "";
    let buffer = "";

    const reader = response.body!.getReader();
    const decoder = new TextDecoder();

    reader.read().then(function processText({ done, value }): any {
      if (done) {
        console.log("Stream complete");
        return;
      }

      buffer += decoder.decode(value);
      while (true) {
        const boundary = buffer.indexOf("\n\n");
        if (boundary === -1) break;

        const data = buffer.slice(0, boundary);
        buffer = buffer.slice(boundary + 2);

        const parsedData = JSON.parse(data.slice(5)); // 'data:' 뒤의 문자열만 추출하여 JSON 파싱

        if (parsedData.answer) {
          aiRes += parsedData.answer;

          setChatData((oldChatData: Chat[]) =>
            oldChatData.map((chat: Chat) =>
              chat.id === "ai-" + chatId && chat.user === "ai"
                ? { ...chat, message: aiRes }
                : chat
            )
          );
        } else if (parsedData == "[DONE]") {
          return;
        }
      }

      return reader.read().then(processText);
    });
    toggleIsAnswering();
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
