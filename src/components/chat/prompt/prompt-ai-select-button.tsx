import { Dispatch, SetStateAction } from "react";

type PromptAiSelectButtonProps = {
  text: string;
  isActive: boolean;
  setAi: Dispatch<SetStateAction<string>>;
};

export default function PromptAiSelectButton({
  text,
  isActive = false,
  setAi,
}: PromptAiSelectButtonProps) {
  const handleButton = () => {
    setAi(text);
  };

  return (
    <button
      className={`flex justify-center items-center w-[40px] h-[40px] lg:w-[140px] lg:h-[40px] rounded-md
      ${isActive ? "bg-blackbg-default" : "bg-prompt-ai-select-button-bg"}`}
      onClick={handleButton}
    >
      <div className="flex gap-1.5">
        <div className="w-5 h-5 bg-white"></div>
        <div className="text-body-medium hidden lg:block">{text}</div>
      </div>
    </button>
  );
}
