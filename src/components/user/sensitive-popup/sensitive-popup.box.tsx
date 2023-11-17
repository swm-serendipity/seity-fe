import { useStore } from "@/store/store";
import DeIdentificationCardsBox from "./sensitive-cards-box";
import DeIdentificationMainTextBox from "./sensitive-main-text-box";
import postPromptAsk from "@/utils/postPromptAsk";

export default function SensitivePopupBox() {
  const {
    toggleSensitiveDataPopup,
    sensitiveDatas,
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
    setChatData((prev) => {
      const newData = [...prev];
      newData[newData.length - 1].message = sensitiveDatas.question;
      return newData;
    });

    postPromptAsk({
      text: sensitiveDatas.question,
      addChatData,
      chatSessionId,
      setChatSessionId,
      setIsAnswering,
      setAnsweringData,
      isAnsweringPersist,
      setIsAnsweringPersist,
      setPopupData,
      detectionData: sensitiveDatas.detectionData,
    });
    toggleSensitiveDataPopup();
  };

  const handleCancelButton = () => {
    setChatData((prev) => {
      return prev.slice(0, prev.length - 1);
    });
    setIsAnswering(false);
    toggleSensitiveDataPopup();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-40 overflow-auto">
      <div
        className="flex bg-white rounded-2xl w-[1280px] h-[70%] lg:h-[90%] mx-8 my-8 py-8 lg:py-12 pl-4 pr-8"
        onClick={stopPropagation}
      >
        <DeIdentificationMainTextBox question={sensitiveDatas.question} />
        <div className="bg-prompt-de-identification-divider-color w-[2px]" />
        <DeIdentificationCardsBox
          sensitiveDatas={sensitiveDatas.result}
          handleSendButton={handleSendButton}
          handleCancelButton={handleCancelButton}
        />
      </div>
    </div>
  );
}
