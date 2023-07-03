import { colors } from "@/styles/color-guide";
import Image from "next/image";

type ColoredButtonProps = {
  buttonText: string;
  color: "point" | "default" | string;
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
          color == "point"
            ? colors.blackbg.point
            : color == "default"
            ? colors.whitebg.default
            : color,
      }}
    >
      {buttonText}
    </button>
  );
};

type SocialButtonProps = {
  buttonText: string;
  color: "point" | "default" | string;
  textColor: "black" | "white";
  socialLogin?: "naver" | "kakao" | "google";
  onClick?: () => void;
};

export const SocialLoginButton = ({
  buttonText,
  color,
  textColor,
  socialLogin,
  onClick,
}: SocialButtonProps) => {
  return (
    <button
      className={`${
        textColor == "black" ? "text-whitebg-default" : "text-blackbg-default"
      } w-[320px] h-[52px] rounded-md mb-2 text-body-large flex justify-center items-center relative`}
      style={{
        backgroundColor:
          color == "point"
            ? colors.blackbg.point
            : color == "default"
            ? colors.whitebg.default
            : color,
      }}
      onClick={onClick}
    >
      <div className="absolute left-8">
        {socialLogin == "naver" ? (
          <Image
            src="/login-naver.svg"
            width={26}
            height={26}
            alt="naver-logo"
          ></Image>
        ) : socialLogin == "google" ? (
          <Image
            src="/login-google.svg"
            width={26}
            height={26}
            alt="naver-logo"
          ></Image>
        ) : socialLogin == "kakao" ? (
          <Image
            src="/login-kakao.svg"
            width={26}
            height={26}
            alt="naver-logo"
          ></Image>
        ) : (
          <></>
        )}
      </div>
      {buttonText}
    </button>
  );
};
