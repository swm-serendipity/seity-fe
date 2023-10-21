type SemiColorButtonProps = {
  text: string;
  type: "positive" | "negative";
  disabled?: boolean;
  onClick?: () => void;
};

export default function SemiColorButton({
  text,
  type,
  disabled = false,
  onClick = () => {},
}: SemiColorButtonProps) {
  return (
    <button
      disabled={disabled}
      className={`rounded-md text-center text-body-medium ${
        disabled
          ? "text-whitebg-disable bg-[#DBDBDB]"
          : type == "positive"
          ? "bg-[#D0FFF4] text-[#12A480]"
          : "bg-[#FFD9D9] text-[#FF3434]"
      }  w-[60px] h-9`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
