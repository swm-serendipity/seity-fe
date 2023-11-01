import ForbiddenWordSet from "@/components/ui/inputs/forbidden-word-set";
import { Dispatch, SetStateAction, useState } from "react";
import { toast } from "react-toastify";

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
      <ForbiddenWordSet
        placeholder="금칙어를 입력해주세요."
        buttonText="금칙어 등록"
        onClick={() => {
          const regExp = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9| ]{2,24}$/;
          if (searchText.length < 2 || searchText.length > 24) {
            toast("금칙어는 최소 2자 이상 최대 24자 이하로 입력해주세요.", {
              type: "error",
            });
            return;
          }
          if (!regExp.test(searchText)) {
            toast("금칙어는 한글, 영어, 숫자만 입력 가능합니다.", {
              type: "error",
            });
            return;
          }
          if (textDatas.includes(searchText)) {
            toast("이미 등록된 금칙어입니다.", {
              type: "error",
            });
            return;
          }
          toast(`"${searchText}" 금칙어가 등록되었습니다.`, {
            type: "success",
          });

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
