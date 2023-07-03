"use client";
import { useState } from "react";
import { ColoredButton } from "../ui/color-button";
import { HintTextInputBox } from "../ui/input-box";

export default function LoginInput() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <div className="mt-12 flex-col flex">
        <HintTextInputBox
          hintText="이메일 계정 입력"
          text={email}
          setText={setEmail}
        />
        <HintTextInputBox
          hintText="비밀번호 입력"
          password
          text={password}
          setText={setPassword}
        />
      </div>

      <div className="mt-3 flex-col flex">
        <ColoredButton
          color="point"
          buttonText="로그인"
          textColor="black"
          onClick={handleLogin}
        />
        <ColoredButton
          color="default"
          buttonText="데모버전 사용"
          textColor="white"
        />
      </div>
    </>
  );
}
