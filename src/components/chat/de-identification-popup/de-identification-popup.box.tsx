import { useStore } from "@/store/store";
import { useState } from "react";
import DeIdentificationCardsBox from "./de-dentification-cards-box";
import DeIdentificationMainTextBox from "./de-dentification-main-text-box";

export type DeIdentificationData = {
  id: string;
  text: string;
  deIdentificateData: string;
  type: string;
  changed: boolean;
};

export default function DeIdentificationPopupBox() {
  const [deidentificateDatas, setDeidentificateDatas] = useState([
    {
      id: "1",
      text: "880102-1879274",
      deIdentificateData: "88****-1******",
      type: "개인정보",
      changed: false,
    },
    {
      id: "2",
      text: "8102039485",
      deIdentificateData: "8********",
      type: "개인정보",
      changed: false,
    },
  ]);
  const [id, setId] = useState("0");
  const togglePopup = useStore((state) => state.togglePopup);

  const stopPropagation = (event: { stopPropagation: () => void }) => {
    event.stopPropagation();
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-auto"
      onClick={togglePopup}
    >
      <div
        className="flex bg-white rounded-2xl w-[1280px] h-[70%] lg:h-[90%] mx-8 my-8 py-8 lg:py-12 pl-4 pr-8"
        onClick={stopPropagation}
      >
        <DeIdentificationMainTextBox
          id={id}
          setId={setId}
          deidentificateDatas={deidentificateDatas}
        />
        <div className="bg-prompt-de-identification-divider-color w-[2px]" />
        <DeIdentificationCardsBox
          id={id}
          setId={setId}
          deidentificateDatas={deidentificateDatas}
          setDeidentificateDatas={setDeidentificateDatas}
        />
      </div>
    </div>
  );
}
