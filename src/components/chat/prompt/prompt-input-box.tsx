import { useStore } from "@/store/store";
import postPromptAsk from "@/utils/postPromptAsk";
import Image from "next/image";
import { KeyboardEvent, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

export default function PromptInputBox() {
  const [text, setText] = useState("");
  const {
    toggleDeIdentificationPopup,
    isAnswering,
    addChatData,
    setChatData,
    chatSessionId,
    setChatSessionId,
    setIsAnswering,
  } = useStore();

  const isDisabled = text.length > 0 && !isAnswering;

  const handleSend = () => {
    postPromptAsk({
      text,
      setText,
      addChatData,
      setChatData,
      chatSessionId,
      setChatSessionId,
      setIsAnswering,
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
