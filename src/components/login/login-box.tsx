import LoginLineBreak from "./login-line-break";
import LoginInput from "./login-input.client";
import LoginSocialButtonBoxs from "./login-social-buttons-box";
import LoginRegisterSection from "./login-register-section";
import LoginUnderTextSection from "./login-undertext-section";

export default function LoginBox() {
  return (
    <div
      className="flex justify-center items-center
   bg-[url('/login-bg.svg')] bg-no-repeat bg-center bg-contain my-12"
    >
      <div className="w-full h-full rounded-xl flex flex-col items-center text-center login-box md:w-[640px] md:h-[830px]">
        <h1 className="font-h1 text-h1 mt-16">로그인</h1>
        <LoginInput />
        <LoginRegisterSection />
        <LoginLineBreak />
        <LoginSocialButtonBoxs />
        <LoginUnderTextSection />
      </div>
    </div>
  );
}
