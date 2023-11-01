import ForbiddenWordRegisterSet from "@/components/ui/inputs/forbidden-word-register-set";
import { Dispatch, SetStateAction, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

type ForbiddenWordManagementRegisterProps = {
  textDatas: string[];
  setTextDatas: Dispatch<SetStateAction<string[]>>;
};

export default function ForbiddenWordManagementRegister({
  textDatas,
  setTextDatas,
}: ForbiddenWordManagementRegisterProps) {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="flex flex-col gap-5">
      <div className="text-h4 font-h4">금칙어 등록하기</div>
      <ForbiddenWordRegisterSet
        placeholder="금칙어를 입력해주세요."
        buttonText="금칙어 등록"
        onClick={() => {
          if (searchText === "") {
            toast("toastify test!");
            return;
          }
          setTextDatas((prev) => [...prev, searchText]);
          setSearchText("");
        }}
        text={searchText}
        setText={setSearchText}
      />

      <ul className="text-whitebg-info text-body-small gap-1.5 flex flex-col">
        <li>* 한국어, 영어, 문구(띄어쓰기 포함) 등록이 가능합니다.</li>
        <li>* 숫자 및 특수문자는 등록이 불가능합니다.</li>
        <li>* 최대 2~24자 입력이 가능합니다.</li>
      </ul>
    </div>
  );
}
