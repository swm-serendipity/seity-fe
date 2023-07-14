import { colors } from "@/styles/color-guide";
import Image from "next/image";

type ColoredButtonProps = {
  buttonText: string;
  color: "point" | "default" | "white";
  textColor: "black" | "white";
  width?: number;
  height?: number;
  onClick?: () => void;
};

export const ColoredButton = ({
  buttonText,
  color,
  textColor,
  onClick,
  width = 320,
  height = 54,
}: ColoredButtonProps) => {
  return (
    <button
      className={`${
        textColor == "black" ? "text-whitebg-default" : "text-blackbg-default"
      } ${
        color == "white" && "border border-whitebg-default"
      } w-[${width}px] h-[${height}px] rounded-md mb-2 text-body-large`}
      onClick={onClick}
      style={{
        backgroundColor:
          color == "point"
            ? colors.blackbg.point
            : color == "white"
            ? colors.blackbg.default
            : colors.whitebg.default,
      }}
    >
      {buttonText}
    </button>
  );
};
