"use client";

import { useState } from "react";
import {
  SignupDateInput,
  SignupLoginInput,
  SignupPasswordCheckInput,
  SignupRankDropDown,
} from "./signup-input";
import { useMutation } from "@tanstack/react-query";
import postSignUp from "@/apis/post-signup";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function SignupInputs() {
  const router = useRouter();
  const [formValues, setFormValues] = useState({
    loginId: "",
    password: "",
    name: "",
    email: "",
    birthDate: "",
    memberRole: "USER",
    part: "",
  });

  const [errorMessages, setErrorMessages] = useState({
    checkPasswordError: "",
  });

  const [checkPassword, setCheckPassword] = useState("");

  const handleChange = (e: { target: { name: string; value: any } }) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!formValues.loginId) {
      toast("아이디를 입력해주세요.", { type: "error" });
      return;
    }
    if (!formValues.password) {
      toast("비밀번호를 입력해주세요.", { type: "error" });
      return;
    }
    if (
      formValues.password.length < 8 ||
      !formValues.password.match(
        /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,}$/
      )
    ) {
      toast(
        "비밀번호는 영문과 특수문자 숫자를 포함하며 8자 이상이어야 합니다.",
        {
          type: "error",
        }
      );
      return;
    }
    if (!formValues.email) {
      toast("이메일을 입력해주세요.", { type: "error" });
      return;
    }
    if (!formValues.email.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)) {
      toast("이메일 형식이 올바르지 않습니다.", { type: "error" });
      return;
    }
    if (!formValues.name) {
      toast("이름을 입력해주세요.", { type: "error" });
      return;
    }
    if (!formValues.birthDate) {
      toast("생년월일을 입력해주세요.", { type: "error" });
      return;
    }
    if (
      !formValues.birthDate.match(
        /^(19[0-9][0-9]|20[0-9][0-9])-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/
      )
    ) {
      toast("생년월일 형식이 올바르지 않습니다.", { type: "error" });
      return;
    }
    if (!formValues.part) {
      toast("직급을 선택해주세요.", { type: "error" });
      return;
    }
    if (formValues.password !== checkPassword) {
      toast("비밀번호가 일치하지 않습니다.", { type: "error" });
      return;
    }
    mutate({ args: formValues });
  };

  const { mutate } = useMutation(postSignUp, {
    onSuccess: (data) => {
      router.push("/login");
    },
    onError: (error: any) => {
      const errorMessage =
        error?.response?.data?.message ||
        "문제가 발생했습니다. 잠시 후 다시 요청해주세요";
      toast(errorMessage, { type: "error" });
    },
  });

  return (
    <div className="flex-col flex justify-center items-center overflow-y-auto flex-grow">
      <h1 className="block md:hidden mb-4">Seity에 회원가입</h1>

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
          error={errorMessages.checkPasswordError}
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
        <SignupRankDropDown
          label="직급"
          placeholder="직급을 선택해주세요."
          onChange={handleChange}
          value={formValues.part}
        />
        <button
          type="submit"
          className="py-2 px-4 w-full bg-whitebg-default text-white rounded-lg text-body-medium h-[54px]"
        >
          회원가입하기
        </button>
      </form>
    </div>
  );
}
