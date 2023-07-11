import { Dispatch, SetStateAction } from "react";
import DeIdentificationCard from "./de-identification-card";
import { DeIdentificationData } from "./de-identification-popup.box";

type DeIdentificationCardsBoxProps = {
  deidentificateDatas: DeIdentificationData[];
  setDeidentificateDatas: Dispatch<SetStateAction<DeIdentificationData[]>>;
  id: string;
  setId: Dispatch<SetStateAction<string>>;
};

export default function DeIdentificationCardsBox({
  deidentificateDatas,
  setDeidentificateDatas,
  id,
  setId,
}: DeIdentificationCardsBoxProps) {
  return (
    <div className="flex-1 px-5 overflow-auto">
      <div className="text-whitebg-info text-body-medium pb-3 ">
        비식별화 처리 제안
      </div>
      {deidentificateDatas.map((data) => {
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
  );
}
