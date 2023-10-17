import { colors } from "@/styles/color-guide";
import Lottie from "lottie-react";
import loadingLottie from "@/components/assets/lottie/white-loading-animation.json";
type ColoredButtonProps = {
  buttonText: string;
  color: "point" | "default" | "white" | "gray" | "alert";
  textColor: "black" | "white" | "alert";
  type?: "button" | "submit";
  width?: number;
  height?: number;
  onClick?: () => void;
  isLoading?: boolean;
};

export const ColoredButton = ({
  buttonText,
  color,
  textColor,
  type = "button",
  onClick,
  width = 320,
  height = 54,
  isLoading = false,
}: ColoredButtonProps) => {
  return (
    <button
      type={type}
      className={`${
        textColor == "black"
          ? "text-whitebg-default"
          : textColor == "alert"
          ? "text-[#FF5E5E]"
          : "text-blackbg-default"
      } ${
        (color == "white" || color == "alert") && "border"
      }  rounded-md mb-2 text-body-medium flex justify-center items-center`}
      onClick={onClick}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor:
          color == "point"
            ? colors.blackbg.point
            : color == "gray"
            ? "#E7E7E7"
            : color == "default"
            ? colors.whitebg.default
            : colors.blackbg.default,
        borderColor: color == "alert" ? "#FF5E5E" : "#232527",
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
