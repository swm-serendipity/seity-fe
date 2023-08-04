import { Dispatch, SetStateAction } from "react";
import DeIdentificationCard from "./de-identification-card";

type DeIdentificationCardsBoxProps = {
  deidentificateDatas: DeIdentification[];
  setDeidentificateDatas: (data: DeIdentification[]) => void;
  id: string;
  setId: Dispatch<SetStateAction<string>>;
  handleSendButton: () => void;
};

export default function DeIdentificationCardsBox({
  deidentificateDatas,
  setDeidentificateDatas,
  id,
  setId,
  handleSendButton,
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
      <div className="w-full flex justify-end h-[50px] px-5 mt-1">
        <button
          onClick={handleSendButton}
          className="text text-body-large font-body-large 
        w-[120px] h-[50px] bg-whitebg-default text-white rounded-lg"
        >
          send
        </button>
      </div>
    </div>
  );
}
