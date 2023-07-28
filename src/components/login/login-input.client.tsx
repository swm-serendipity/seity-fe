"use client";
import { KeyboardEvent, useEffect, useState } from "react";
import { ColoredButton } from "../ui/color-button";
import { HintTextInputBox } from "../ui/input-box";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import postLogin from "@/apis/post-login";

export default function LoginInput() {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      alert("이미 로그인 되어있습니다.");
      router.back();
    }
  }, []);

  const loginMutation = useMutation(postLogin, {
    onSuccess: (data) => {
      localStorage.setItem("accessToken", data.result.accessToken);
      localStorage.setItem("refreshToken", data.result.refreshToken);
      setLoginId("");
      setPassword("");
      router.push("/chat");
    },
    onError: (error) => {
      alert("로그인 실패");
    },
  });

  const handleOnEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && e.shiftKey) return;
    if (e.key === "Enter") {
      e.preventDefault();
      if (loginId.length > 0 && password.length > 0) {
        handleLogin();
      }
    }
  };

  const handleLogin = () => {
    if (!loginId || !password) {
      alert("아이디와 비밀번호를 입력해주세요");
      return;
    }
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
          onKeyPress={handleOnEnter}
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
