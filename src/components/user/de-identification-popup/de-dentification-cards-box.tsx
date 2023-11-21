import { Dispatch, SetStateAction } from "react";
import DeIdentificationCard from "./de-identification-card";
import { ColoredButton } from "@/components/ui/color-button";

type DeIdentificationCardsBoxProps = {
  deidentificateDatas: DeIdentification[];
  setDeidentificateDatas: (data: DeIdentification[]) => void;
  id: string;
  isLoading: boolean;
  setId: Dispatch<SetStateAction<string>>;
  handleSendButton: () => void;
  handleCancelButton: () => void;
};

export default function DeIdentificationCardsBox({
  deidentificateDatas,
  setDeidentificateDatas,
  id,
  setId,
  isLoading,
  handleSendButton,
  handleCancelButton,
}: DeIdentificationCardsBoxProps) {
  return (
    <div className="flex-1 flex flex-col">
      <div className="text-whitebg-info text-body-medium pb-3 px-5">
        비식별화 처리 제안
      </div>
      <div className="flex flex-col overflow-auto custom-scrollbar px-4 flex-1">
        {deidentificateDatas.map((data) => {
          if (data.deIdentificateData.length > 0)
            return (
              <DeIdentificationCard
                key={data.id}
                deidentificateData={data}
                isChange={data.changed}
                isSelect={data.id === id}
                handleCard={() => {
                  setId(data.id);
                }}
                handleChangeButton={() => {
                  setDeidentificateDatas(
                    deidentificateDatas.map((item) => {
                      if (item.id === data.id) {
                        return { ...item, changed: !item.changed };
                      } else {
                        return item;
                      }
                    })
                  );
                }}
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
          isLoading={isLoading}
          onClick={handleSendButton}
          width={120}
          height={50}
        />
      </div>
    </div>
  );
}
