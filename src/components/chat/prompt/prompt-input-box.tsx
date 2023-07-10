import Image from "next/image";
import { Dispatch, KeyboardEvent, SetStateAction, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

type PromptInputBoxProps = {
  setChatList: Dispatch<SetStateAction<Chat[]>>;
  turn: "user" | "ai";
  setTurn: Dispatch<SetStateAction<"user" | "ai">>;
};

export default function PromptInputBox({
  setChatList,
  turn,
  setTurn,
}: PromptInputBoxProps) {
  const [text, setText] = useState("");

  const handleSend = () => {
    setChatList((prevChatList) => [
      ...prevChatList,
      {
        id: Date.now(),
        user: turn,
        message: text,
        timestamp: new Date().toISOString(),
      },
    ]);
    setText("");
    setTurn(turn === "user" ? "ai" : "user");
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
    <div className="flex items-center bg-blackbg-default w-full xl:w-[768px] md:mx-7 min-h-[58px] rounded-xl my-5">
      <TextareaAutosize
        value={text}
        onChange={(text) => setText(text.target.value)}
        maxRows={7}
        placeholder="Send a message"
        className="w-full resize-none px-5 focus:border-transparent outline-none my-4"
        onKeyPress={handleOnKeyPress}
      />
      <Image
        src="/chat-file.svg"
        width="32"
        height="32"
        alt="파일 첨부"
        className="mr-2"
      />
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
  );
}
