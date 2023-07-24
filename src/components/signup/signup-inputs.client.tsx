"use client";

import { useState } from "react";
import {
  SignupDateInput,
  SignupLoginInput,
  SignupPasswordCheckInput,
} from "./signup-input";
import { useMutation } from "@tanstack/react-query";
import postSignUp from "@/apis/post-signup";
import { useRouter } from "next/navigation";

export default function SignupInputs() {
  const router = useRouter();
  const [formValues, setFormValues] = useState({
    loginId: "",
    password: "",
    name: "",
    email: "",
    birthDate: "",
    memberRole: "USER",
    part: "FRONT_END",
  });

  const [checkPassword, setCheckPassword] = useState("");

  const handleChange = (e: { target: { name: string; value: any } }) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!formValues.loginId) {
      alert("아이디를 입력해주세요.");
      return;
    }
    if (!formValues.password) {
      alert("비밀번호를 입력해주세요.");
      return;
    }
    if (!formValues.email) {
      alert("이메일을 입력해주세요.");
      return;
    }
    if (!formValues.name) {
      alert("이름을 입력해주세요.");
      return;
    }
    if (!formValues.birthDate) {
      alert("생년월일을 입력해주세요.");
      return;
    }
    if (formValues.password !== checkPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    mutate({ args: formValues });
  };

  const { mutate } = useMutation(postSignUp, {
    onSuccess: (data) => {
      router.push("/login");
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return (
    <div className="flex-1 flex-col flex justify-center items-center">
      <form onSubmit={handleSubmit}>
        <SignupLoginInput
          label="아이디"
          idName="loginId"
          placeholder="아이디를 입력해주세요"
          value={formValues.loginId}
          onChange={handleChange}
        />
        <SignupLoginInput
          label="비밀번호"
          idName="password"
          placeholder="비밀번호를 입력해주세요."
          type="password"
          value={formValues.password}
          onChange={handleChange}
        />
        <SignupPasswordCheckInput
          label="비밀번호 확인"
          idName="passwordCheck"
          placeholder="비밀번호를 한번 더 입력해주세요."
          value={checkPassword}
          onChange={setCheckPassword}
        />
        <SignupLoginInput
          label="이메일"
          idName="email"
          placeholder="이메일을 입력해주세요."
          value={formValues.email}
          onChange={handleChange}
        />
        <SignupLoginInput
          label="이름"
          idName="name"
          placeholder="사용자 이름을 입력해주세요."
          value={formValues.name}
          onChange={handleChange}
        />
        <SignupDateInput value={formValues.birthDate} onChange={handleChange} />
        <button type="submit" className="py-2 px-4">
          테스트 회원가입
        </button>
      </form>
    </div>
  );
}
