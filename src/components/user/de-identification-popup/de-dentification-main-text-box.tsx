import { Dispatch, SetStateAction } from "react";

type DeIdentificationMainTextBoxProps = {
  deidentificateDatas: DeIdentification[];
  id: string;
  setId: Dispatch<SetStateAction<string>>;
};

export default function DeIdentificationMainTextBox({
  deidentificateDatas,
  id,
  setId,
}: DeIdentificationMainTextBoxProps) {
  return (
    <div className="w-7/12 lg:w-8/12 px-4 h-full overflow-y-scroll custom-scrollbar">
      <div className="text-whitebg-info text-body-medium pb-6">
        비식별화 처리 필요 감지 내용
      </div>
      <div>
        {deidentificateDatas.map((item) => {
          if (item.type === "개인정보") {
            return (
              <span
                key={item.id}
                onClick={() => setId(item.id)}
                className={`
                cursor-pointer
                  ${
                    item.id === id
                      ? item.changed
                        ? "highlight-green"
                        : "highlight-red"
                      : item.changed
                      ? "underline-green"
                      : "underline-red"
                  }`}
              >
                {item.changed ? item.originalData : item.deIdentificateData}
              </span>
            );
          } else if (item.type === "금칙어") {
            return (
              <span
                key={item.id}
                onClick={() => setId(item.id)}
                className={`
                cursor-pointer
                  ${
                    item.id === id ? "highlight-disabled" : "underline-disabled"
                  }`}
              >
                {item.text}
              </span>
            );
          } else {
            return (
              <span key={item.id} className="whitespace-pre-wrap">
                {item.text}
              </span>
            );
          }
        })}
      </div>
    </div>
  );
}
