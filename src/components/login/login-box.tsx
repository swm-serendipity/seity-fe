import Link from "next/link";
import { SocialLoginButton } from "../ui/color-button";
import LoginLineBreak from "./login-line-break";
import LoginInput from "./login-input.client";

export default function LoginBox() {
  return (
    <div className="w-full md:w-[640px] h-[830px] relative">
      <div
        className="w-full h-full rounded-xl flex flex-col items-center text-center"
        style={{
          boxShadow: "0px 8px 20px rgba(207, 207, 207, 0.25)",
          backdropFilter: "blur(9px)",
          background:
            "linear-gradient(147.52deg, rgba(255, 255, 255, 0) 0.47%, #FFFFFF 0.48%, rgba(255, 255, 255, 0.6) 90.85%)",
          opacity: 0.98,
        }}
      >
        <h1 className="font-h1 text-h1 mt-16">로그인</h1>
        <LoginInput />
        <div className="mt-5">
          <span className="text-body-medium text-stone-700">
            신규 사용자이신가요?{" "}
          </span>
          <Link
            href={"/signup"}
            className="text-body-medium text-blue-600 underline"
          >
            회원가입
          </Link>
        </div>
        <LoginLineBreak />
        <SocialLoginButton
          textColor="white"
          color="#03C75A"
          buttonText="네이버 계정으로 로그인"
          socialLogin="naver"
        ></SocialLoginButton>
        <SocialLoginButton
          textColor="black"
          color="#FEE500"
          buttonText="카카오 계정으로 로그인"
          socialLogin="kakao"
        ></SocialLoginButton>
        <SocialLoginButton
          textColor="black"
          color="#FFF"
          buttonText="구글 계정으로 로그인"
          socialLogin="google"
        ></SocialLoginButton>
        <div className="mt-14 text-body-small opacity-50">
          Copyright © 2023. Seity. All rights reserved.
        </div>
      </div>
    </div>
  );
}
