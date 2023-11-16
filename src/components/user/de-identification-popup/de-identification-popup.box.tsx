import { useStore } from "@/store/store";
import { useState } from "react";
import DeIdentificationCardsBox from "./de-dentification-cards-box";
import DeIdentificationMainTextBox from "./de-dentification-main-text-box";
import postPromptAsk from "@/utils/postPromptAsk";
import { dprTestData } from "@/utils/dprTestData";

export default function DeIdentificationPopupBox() {
  const [id, setId] = useState("0");
  const {
    toggleDeIdentificationPopup,
    deIdentificationData,
    toggleSensitiveDataPopup,
    setSensitiveData,
    setDeIdentificationData,
    addChatData,
    setChatData,
    chatSessionId,
    setChatSessionId,
    setIsAnswering,
    setAnsweringData,
    isAnsweringPersist,
    setIsAnsweringPersist,
    setPopupData,
  } = useStore();

  const stopPropagation = (event: { stopPropagation: () => void }) => {
    event.stopPropagation();
  };

  const handleSendButton = () => {
    const deIdentificationText = deIdentificationData
      .map((data) => {
        if (data.deIdentificateData.length > 0) {
          if (data.changed) {
            return data.originalData;
          }
          return data.deIdentificateData;
        } else {
          return data.text;
        }
      })
      .join("");

    const detectionData = deIdentificationData
      ? deIdentificationData
          .map((data) => {
            let indexCounter = 0;
            if (data.entity.length == 0) {
            } else if (!data.changed && data.entity.length > 0) {
              return {
                index: data.startIndex - indexCounter,
                length: data.deIdentificateData.length,
                entity: "PRIVACY",
                isDeIdentified: true,
              };
            } else if (data.changed && data.entity.length > 0) {
              const tempData = {
                index: data.startIndex - indexCounter,
                length: data.originalData.length,
                entity: "PRIVACY",
                isDeIdentified: false,
              };
              indexCounter +=
                data.originalData.length - data.deIdentificateData.length;
              return tempData;
            }
            return null;
          })
          .filter((item) => {
            if (item != null) return item;
          })
      : null;
    // setChatData((prev) => {
    //   const newData = [...prev];
    //   newData[newData.length - 1].message = deIdentificationText;
    //   return newData;
    // });

    // postPromptAsk({
    //   text: deIdentificationText,
    //   addChatData,
    //   chatSessionId,
    //   setChatSessionId,
    //   setIsAnswering,
    //   setAnsweringData,
    //   isAnsweringPersist,
    //   setIsAnsweringPersist,
    //   setPopupData,
    //   detectionData,
    // });
    toggleDeIdentificationPopup();
    setSensitiveData({
      question: deIdentificationText,
      result: dprTestData.result.detections,
      detectionData: detectionData,
    });
    toggleSensitiveDataPopup();
  };

  const handleCancelButton = () => {
    setChatData((prev) => {
      return prev.slice(0, prev.length - 1);
    });
    setIsAnswering(false);
    toggleDeIdentificationPopup();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-auto">
      <div
        className="flex bg-white rounded-2xl w-[1280px] h-[70%] lg:h-[90%] mx-8 my-8 py-8 lg:py-12 pl-4 pr-8"
        onClick={stopPropagation}
      >
        <DeIdentificationMainTextBox
          id={id}
          setId={setId}
          deidentificateDatas={deIdentificationData}
        />
        <div className="bg-prompt-de-identification-divider-color w-[2px]" />
        <DeIdentificationCardsBox
          id={id}
          setId={setId}
          deidentificateDatas={deIdentificationData}
          setDeidentificateDatas={setDeIdentificationData}
          handleSendButton={handleSendButton}
          handleCancelButton={handleCancelButton}
        />
      </div>
    </div>
  );
}
