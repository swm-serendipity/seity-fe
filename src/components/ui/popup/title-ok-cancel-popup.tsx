import { useStore } from "@/store/store";
import { ColoredButton } from "../color-button";

export default function TitleOkCancelPopup() {
  const { popupData, setPopupData } = useStore();

  const stopPropagation = (event: { stopPropagation: () => void }) => {
    event.stopPropagation();
  };

  const handleCancelButton = () => {
    popupData.handleCancel();
    setPopupData({
      type: "",
      content: "",
      isVisible: false,
      title: "",
      handleCancel: () => {},
      handleOk: () => {},
    });
  };

  const handleOkButton = () => {
    popupData.handleOk();
    setPopupData({
      type: "",
      content: "",
      isVisible: false,
      title: "",
      handleCancel: () => {},
      handleOk: () => {},
    });
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-auto"
      onClick={handleCancelButton}
    >
      <div
        className="flex-col flex bg-white rounded-2xl w-[400px] h-[260px] p-7.5"
        onClick={stopPropagation}
      >
        <div className="justify-center items-center flex font-h3 text-h3">
          {popupData.title}
        </div>
        <div className="justify-center items-center flex mt-7 h-[46px] text-center whitespace-pre">
          {popupData.content}
        </div>
        <div className="flex justify-center w-full gap-3 mt-10">
          <ColoredButton
            width={160}
            height={52}
            buttonText="취소"
            color="white"
            onClick={handleCancelButton}
            textColor="black"
          />
          <ColoredButton
            width={160}
            height={52}
            buttonText="확인"
            color="point"
            onClick={handleOkButton}
            textColor="black"
          />
        </div>
      </div>
    </div>
  );
}
