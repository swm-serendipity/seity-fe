import { ColoredButton } from "@/components/ui/color-button";
import SensitiveCard from "./sensitive-card";
import { useState } from "react";
import { Tooltip } from "react-tooltip";

type SensitiveCardsBoxProps = {
  sensitiveDatas: SensitiveDataWithId[];
  handleSendButton: () => void;
  handleCancelButton: () => void;
};

export default function SensitiveCardsBox({
  sensitiveDatas,
  handleSendButton,
  handleCancelButton,
}: SensitiveCardsBoxProps) {
  const [id, setId] = useState(0);
  return (
    <div className="flex-1 flex flex-col">
      <div className="text-whitebg-info text-body-medium pb-3 px-5">
        질의와 비슷한 내용의 내부 정보
      </div>
      <div className="flex flex-col overflow-auto custom-scrollbar px-4 flex-1">
        {sensitiveDatas.map((data, index) => {
          return (
            <SensitiveCard
              key={index}
              sensitiveData={data}
              isSelect={id == index}
              handleCard={() => setId(index)}
            />
          );
        })}
      </div>
      <div className="w-full flex justify-end h-[50px] px-5 mt-1 gap-4">
        <ColoredButton
          buttonText="질의 취소"
          color="white"
          textColor="black"
          onClick={handleCancelButton}
          width={120}
          height={50}
        />
        <a
          data-tooltip-id="send-button-tooltip"
          data-tooltip-content="질의 내용과 비슷한 기업 내부 정보들이 탐지되었어요. 질의를 보내시겠어요?"
          data-tooltip-place="top"
        >
          <ColoredButton
            buttonText="보내기"
            color="default"
            textColor="white"
            onClick={handleSendButton}
            width={120}
            height={50}
          />
        </a>
        {sensitiveDatas.length > 0 && <Tooltip id="send-button-tooltip" />}
      </div>
    </div>
  );
}
