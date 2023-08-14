import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

type PromptAiSelectButtonProps = {
  text: string;
  isActive: boolean;
  isDisabled?: boolean;
  setAi: Dispatch<SetStateAction<string>>;
};

export default function PromptAiSelectButton({
  text,
  isActive = false,
  isDisabled = false,
  setAi,
}: PromptAiSelectButtonProps) {
  const handleButton = () => {
    setAi(text);
  };

  return (
    <button
      className={`flex justify-center items-center w-[40px] h-[40px] lg:w-[140px] rounded-md
      ${
        isActive || !isDisabled
          ? "bg-blackbg-default"
          : "bg-prompt-ai-select-button-bg"
      }`}
      onClick={handleButton}
      disabled={isDisabled}
    >
      <div className="flex gap-1.5">
        <Image
          src={"/chat/chat-gpt-3.5.svg"}
          alt="chatgpt 3.5"
          width={20}
          height={20}
        />
        <div className="text-body-medium hidden lg:block">{text}</div>
      </div>
    </button>
  );
}
