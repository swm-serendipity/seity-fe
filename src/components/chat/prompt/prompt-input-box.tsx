import Image from "next/image";
import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

export default function PromptInputBox() {
  const [text, setText] = useState("");
  return (
    <div className="flex items-center bg-blackbg-default w-full xl:w-[768px] md:mx-7 min-h-[58px] rounded-xl my-5">
      <TextareaAutosize
        value={text}
        onChange={(text) => setText(text.target.value)}
        maxRows={7}
        placeholder="Send a message"
        className="w-full resize-none px-5 focus:border-transparent outline-none my-4"
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
      >
        send
      </button>
    </div>
  );
}
