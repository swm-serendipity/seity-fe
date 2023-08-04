type PromptBottomButtonProps = {
  onClick: () => void;
};

export default function PromptBottomButton({
  onClick,
}: PromptBottomButtonProps) {
  return (
    <button
      className="w-[40px] h-[40px] rounded-full chat-bottom-button absolute 
      right-4 md:right-7 lg:right-12 xl:right-40 2xl:right-60 bottom-[136px] bg-white z-50"
      onClick={onClick}
    >
      <span className="block text-center leading-[40px]">↓</span>
    </button>
  );
}
