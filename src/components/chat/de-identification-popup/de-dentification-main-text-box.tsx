import { Dispatch, SetStateAction } from "react";
import { DeIdentificationData } from "./de-identification-popup.box";

type DeIdentificationMainTextBoxProps = {
  deidentificateDatas: DeIdentificationData[];
  id: string;
  setId: Dispatch<SetStateAction<string>>;
};

export default function DeIdentificationMainTextBox({
  deidentificateDatas,
  id,
  setId,
}: DeIdentificationMainTextBoxProps) {
  return (
    <div className="w-7/12 lg:w-8/12 px-4">
      <div className="text-whitebg-info text-body-medium pb-6">
        비식별화 처리 필요 감지 내용
      </div>
      <div>
        <p className="text-body-large font-body-medium py-1">
          신종웅{" "}
          {
            <span
              onClick={() => setId(deidentificateDatas[0].id)}
              className={
                deidentificateDatas[0].id === id
                  ? deidentificateDatas[0].changed
                    ? "highlight-green"
                    : "highlight-red"
                  : deidentificateDatas[0].changed
                  ? "underline-green"
                  : "underline-red"
              }
            >
              {deidentificateDatas[0].changed
                ? deidentificateDatas[0].text
                : deidentificateDatas[0].deIdentificateData}
            </span>
          }{" "}
          이 사람은 누굴까?
        </p>
        <p className="text-body-large font-body-medium py-1">
          쿠폰번호{" "}
          <span
            onClick={() => setId(deidentificateDatas[1].id)}
            className={
              deidentificateDatas[1].id === id
                ? deidentificateDatas[1].changed
                  ? "highlight-green"
                  : "highlight-red"
                : deidentificateDatas[1].changed
                ? "underline-green"
                : "underline-red"
            }
          >
            {deidentificateDatas[1].changed
              ? deidentificateDatas[1].text
              : deidentificateDatas[1].deIdentificateData}
          </span>{" "}
          번호는 어떤 상품의 쿠폰인지 가르쳐줘
        </p>
      </div>
    </div>
  );
}
