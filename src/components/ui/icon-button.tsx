import Image from "next/image";

type FoldButtonProps = {
  color: "black" | "white";
  onClick: () => void;
};

export const FoldIconButton = ({ color, onClick }: FoldButtonProps) => {
  return (
    <button
      className="bg-whitebg-default w-[36px] h-[36px] flex justify-center items-center border rounded-md"
      onClick={onClick}
      style={{
        borderColor: color ? "#6F6F6F" : "EBEBEB",
      }}
    >
      <Image
        src={
          color == "black"
            ? "/sidebar-fold-white.svg"
            : "/sidebar-fold-black.svg"
        }
        width={16}
        height={16}
        alt="접기"
      ></Image>
    </button>
  );
};
