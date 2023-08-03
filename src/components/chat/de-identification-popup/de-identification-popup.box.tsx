import { useStore } from "@/store/store";
import { useState } from "react";
import DeIdentificationCardsBox from "./de-dentification-cards-box";
import DeIdentificationMainTextBox from "./de-dentification-main-text-box";
import postPromptAsk from "@/utils/postPromptAsk";

export default function DeIdentificationPopupBox() {
  const [id, setId] = useState("0");
  const {
    toggleDeIdentificationPopup,
    deIdentificationData,
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
            return data.text;
          }
          return data.deIdentificateData;
        } else {
          return data.text;
        }
      })
      .join("");
    setChatData((prev) => {
      const newData = [...prev];
      newData[newData.length - 1].message = deIdentificationText;
      return newData;
    });

    postPromptAsk({
      text: deIdentificationText,
      addChatData,
      chatSessionId,
      setChatSessionId,
      setIsAnswering,
      setAnsweringData,
      isAnsweringPersist,
      setIsAnsweringPersist,
      setPopupData,
    });
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
        />
      </div>
    </div>
  );
}
