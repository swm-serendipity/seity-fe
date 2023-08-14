"use client";
import { KeyboardEvent, useState } from "react";
import { ColoredButton } from "../ui/color-button";
import { HintTextInputBox } from "../ui/input-box";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import postLogin from "@/apis/post-login";
import { useStore } from "@/store/store";
import axios from "axios";

export default function LoginInput() {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { setPopupData } = useStore();

  const loginMutation = useMutation(postLogin, {
    onSuccess: (data) => {
      localStorage.setItem("accessToken", data.result.accessToken);
      localStorage.setItem("refreshToken", data.result.refreshToken);
      setLoginId("");
      setPassword("");
      router.push("/chat");
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) alert(error.message);
      else alert("로그인에 실패했습니다.");
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

  const handleDemoButton = () => {
    setPopupData({
      type: "title-ok",
      title: "로그인이 필요해요!",
      content: "시제품은 로그인 이후 사용가능합니다.",
      handleCancel: () => {},
      handleOk: () => {},
      isVisible: true,
    });
  };

  return (
    <div>
      <div className="mt-16 flex-col flex">
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
          onClick={handleDemoButton}
        />
      </div>
    </div>
  );
}
