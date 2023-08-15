import { colors } from "@/styles/color-guide";
import Lottie from "lottie-react";
import loadingLottie from "../assets/white-loading-animation.json";
type ColoredButtonProps = {
  buttonText: string;
  color: "point" | "default" | "white";
  textColor: "black" | "white";
  width?: number;
  height?: number;
  onClick?: () => void;
  isLoading?: boolean;
};

export const ColoredButton = ({
  buttonText,
  color,
  textColor,
  onClick,
  width = 320,
  height = 54,
  isLoading = false,
}: ColoredButtonProps) => {
  return (
    <button
      className={`${
        textColor == "black" ? "text-whitebg-default" : "text-blackbg-default"
      } ${
        color == "white" && "border border-whitebg-default"
      }  rounded-md mb-2 text-body-medium flex justify-center items-center`}
      onClick={onClick}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor:
          color == "point"
            ? colors.blackbg.point
            : color == "white"
            ? colors.blackbg.default
            : colors.whitebg.default,
      }}
    >
      {isLoading ? (
        <Lottie animationData={loadingLottie} className="w-14 h-14" />
      ) : (
        <p>{buttonText}</p>
      )}
    </button>
  );
};
