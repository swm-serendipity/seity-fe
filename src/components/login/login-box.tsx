"use client";
import LoginInput from "./login-input.client";
import LoginRegisterSection from "./login-register-section";
import LoginUnderTextSection from "./login-undertext-section";
import { useStore } from "@/store/store";
import Popup from "../ui/popup/popup";

export default function LoginBox() {
  const { popupData } = useStore();
  return (
    <div
      className="flex justify-center items-center
   bg-[url('/login/login-bg.svg')] bg-no-repeat bg-center bg-contain my-12"
    >
      {popupData.isVisible && <Popup />}

      <div className="w-full h-full rounded-xl flex flex-col items-center text-center login-box md:w-[640px] md:h-[630px]">
        <h1 className="font-h1 text-h1 mt-16">로그인</h1>
        <LoginInput />
        <LoginRegisterSection />
        {/* <LoginLineBreak /> */}
        {/* <LoginSocialButtonBoxs /> */}
        <LoginUnderTextSection />
      </div>
    </div>
  );
}
