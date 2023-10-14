type SemiColorButtonProps = {
  text: string;
  type: "positive" | "negative";
  onClick?: () => void;
};

export default function SemiColorButton({
  text,
  type,
  onClick = () => {},
}: SemiColorButtonProps) {
  return (
    <button
      className={`rounded-md text-center text-body-medium ${
        type == "positive"
          ? "bg-[#D0FFF4] text-[#12A480]"
          : "bg-[#FFD9D9] text-[#FF3434]"
      }  w-[60px] h-9`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
