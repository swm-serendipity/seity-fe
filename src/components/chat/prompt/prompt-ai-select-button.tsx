type PromptAiSelectButtonProps = {
  text: string;
  onClick?: () => void;
};

export default function PromptAiSelectButton({
  text,
  onClick = () => {},
}: PromptAiSelectButtonProps) {
  return (
    <button
      className="flex justify-center items-center w-[40px] h-[40px] lg:w-[140px] lg:h-[40px] bg-prompt-ai-select-button-bg rounded-md"
      onClick={onClick}
    >
      <div className="flex gap-1.5">
        <div className="w-5 h-5 bg-white"></div>
        <div className="text-body-medium hidden lg:block">{text}</div>
      </div>
    </button>
  );
}
