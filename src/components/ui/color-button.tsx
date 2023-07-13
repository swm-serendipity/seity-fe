import { colors } from "@/styles/color-guide";
import Image from "next/image";

type ColoredButtonProps = {
  buttonText: string;
  color: "point" | "default";
  textColor: "black" | "white";
  onClick?: () => void;
};

export const ColoredButton = ({
  buttonText,
  color,
  textColor,
  onClick,
}: ColoredButtonProps) => {
  return (
    <button
      className={`${
        textColor == "black" ? "text-whitebg-default" : "text-blackbg-default"
      } w-[320px] h-[52px] rounded-md mb-2 text-body-large`}
      onClick={onClick}
      style={{
        backgroundColor:
          color == "point" ? colors.blackbg.point : colors.whitebg.default,
      }}
    >
      {buttonText}
    </button>
  );
};
