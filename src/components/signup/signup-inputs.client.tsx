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
          value={formValues.loginId}
          onChange={handleChange}
        />
        <SignupLoginInput
          label="비밀번호"
          idName="password"
          value={formValues.password}
          onChange={handleChange}
        />
        <SignupPasswordCheckInput
          label="비밀번호 확인"
          idName="passwordCheck"
          value={checkPassword}
          onChange={setCheckPassword}
        />

        <SignupLoginInput
          label="이름"
          idName="name"
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
