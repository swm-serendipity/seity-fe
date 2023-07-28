import postDlpDeIendification from "@/apis/post-dlp-de-identification";
import { useStore } from "@/store/store";
import changeDeIdentificationState from "@/utils/changeDeIdentificationState";
import postPromptAsk from "@/utils/postPromptAsk";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import { KeyboardEvent, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

export default function PromptInputBox() {
  const [text, setText] = useState("");
  const [tempText, setTempText] = useState("");
  const {
    toggleDeIdentificationPopup,
    isAnswering,
    addChatData,
    chatSessionId,
    setChatSessionId,
    setIsAnswering,
    setAnsweringData,
    setDeIdentificationData,
  } = useStore();

  const isDisabled = text.length > 0 && !isAnswering;
  const { mutate } = useMutation(postDlpDeIendification, {
    onSuccess: (data) => {
      if (data.result.length === 0) {
        postPromptAsk({
          text: tempText,
          addChatData,
          chatSessionId,
          setChatSessionId,
          setIsAnswering,
          setAnsweringData,
        });
        setTempText("");
        return;
      }
      const changeData = changeDeIdentificationState(data);
      setDeIdentificationData(changeData);
      toggleDeIdentificationPopup();
    },
  });

  const handleSend = () => {
    const chatId = Date.now();
    mutate({ question: text });
    addChatData({
      id: "user-" + chatId,
      user: "user",
      message: text,
      timestamp: new Date().toISOString(),
    });
    setTempText(text);
    setText(""); //입력창 초기화
    setIsAnswering(true); //답변중 상태로 변경
    setAnsweringData({
      id: "ai",
      user: "ai",
      message: "",
      timestamp: new Date().toISOString(),
    });
  };

  const handleOnKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && e.shiftKey) return;
    if (e.key === "Enter") {
      e.preventDefault();
      if (isDisabled) {
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
        {/* todo */}
        {/* <button>
          <Image
            src="/chat-file.svg"
            width="32"
            height="32"
            alt="파일 첨부"
            className="mr-2"
          />
        </button> */}
        <button
          className={`mx-3 w-[76px] h-[38px] rounded-md ${
            isDisabled
              ? "bg-blackbg-point text-whitebg-default"
              : "bg-blackbg-serve text-whitebg-disable"
          }`}
          onClick={handleSend}
          disabled={!isDisabled}
        >
          send
        </button>
      </div>
    </div>
  );
}
