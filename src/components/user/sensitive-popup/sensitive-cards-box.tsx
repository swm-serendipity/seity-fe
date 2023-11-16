import { ColoredButton } from "@/components/ui/color-button";
import SensitiveCard from "./sensitive-card";
import { useState } from "react";

type SensitiveCardsBoxProps = {
  sensitiveDatas: SensitiveData[];
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
        <ColoredButton
          buttonText="보내기"
          color="default"
          textColor="white"
          onClick={handleSendButton}
          width={120}
          height={50}
        />
      </div>
    </div>
  );
}
