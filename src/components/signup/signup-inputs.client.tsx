"use client";

import { useState } from "react";
import {
  SignupDateInput,
  SignupLoginInput,
  SignupPasswordCheckInput,
} from "./signup-input";

export default function SignupInputs() {
  const [formValues, setFormValues] = useState({
    loginId: "",
    password: "",
    name: "",
    email: "",
    birthDate: "",
    memberRole: "USER",
    part: "",
  });

  const [checkPassword, setCheckPassword] = useState("");

  const handleChange = (e: { target: { name: string; value: any } }) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // 여기에서 API 호출 로직을 구현할 수 있습니다.
  };

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
          회원가입
        </button>
      </form>
    </div>
  );
}
