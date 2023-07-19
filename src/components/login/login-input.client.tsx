"use client";
import { useState } from "react";
import { ColoredButton } from "../ui/color-button";
import { HintTextInputBox } from "../ui/input-box";
import { useMutation } from "@tanstack/react-query";
import postLogin from "@/apis/post-login";

export default function LoginInput() {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");

  const loginMutation = useMutation(postLogin, {
    onSuccess: (data) => {
      localStorage.setItem("accessToken", data.result.accessToken);
      localStorage.setItem("refreshToken", data.result.refreshToken);
      setLoginId("");
      setPassword("");
    },
    onError: (error) => {
      alert(error);
    },
  });

  const handleLogin = () => {
    loginMutation.mutate({ loginId, password });
  };

  return (
    <div>
      <div className="mt-12 flex-col flex">
        <HintTextInputBox
          hintText="아이디 입력"
          text={loginId}
          setText={setLoginId}
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
    </div>
  );
}
