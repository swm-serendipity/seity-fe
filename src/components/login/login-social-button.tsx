import Image from "next/image";

type SocialButtonProps = {
  buttonText: string;
  color: string;
  textColor: "black" | "white";
  socialLogin: "naver" | "kakao" | "google";
  onClick?: () => void;
};

export default function LoginSocialButton({
  buttonText,
  color,
  textColor,
  socialLogin,
  onClick,
}: SocialButtonProps) {
  return (
    <button
      className={`${
        textColor == "black" ? "text-whitebg-default" : "text-blackbg-default"
      } w-[320px] h-[52px] rounded-md text-body-large flex justify-center items-center relative`}
      style={{
        backgroundColor: color,
      }}
      onClick={onClick}
    >
      <div className="absolute left-8">
        <SocialButtonImage socialLogin={socialLogin}></SocialButtonImage>
      </div>
      {buttonText}
    </button>
  );
}

const SocialButtonImage = ({
  socialLogin,
}: {
  socialLogin: "naver" | "kakao" | "google";
}) => {
  if (socialLogin == "naver") {
    return (
      <Image
        src="/login/login-naver.svg"
        width={26}
        height={26}
        alt="naver-logo"
      ></Image>
    );
  } else if (socialLogin == "google") {
    return (
      <Image
        src="/login/login-google.svg"
        width={26}
        height={26}
        alt="naver-logo"
      ></Image>
    );
  } else if (socialLogin == "kakao") {
    return (
      <Image
        src="/login/login-kakao.svg"
        width={26}
        height={26}
        alt="naver-logo"
      ></Image>
    );
  }
};
