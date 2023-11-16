import { Dispatch, SetStateAction } from "react";

type DeIdentificationMainTextBoxProps = {
  question: string;
};

export default function SensitiveMainTextBox({
  question,
}: DeIdentificationMainTextBoxProps) {
  return (
    <div className="w-6/12 px-4 h-full overflow-y-scroll custom-scrollbar">
      <div className="text-whitebg-info text-body-medium pb-6">
        전체 본문 내용
      </div>
      <div className="whitespace-pre-wrap">{question}</div>
    </div>
  );
}
