import { ColoredButton } from "@/components/ui/color-button";
import { PromptSharedChatBox } from "./prompt-shared-chat-box";
import { useStore } from "@/store/store";

export default function PromptSharedBox() {
  const { setPopupData } = useStore();
  const handleContinueButtonClick = () => {
    setPopupData({
      type: "title-ok",
      isVisible: true,
      title: "아직 개발되지 않은 기능이에요!",
      content: "추후 더 멋있는 모습으로 공개할게요!",
      handleCancel: () => {},
      handleOk: () => {},
    });
  };

  return (
    <div className="flex flex-col flex-1 h-screen bg-white z-10">
      <div className="flex flex-col flex-1 overflow-y-auto">
        {/* <PromptAiSelectBox /> */}
        <PromptSharedChatBox />
      </div>
      <div className="absolute w-full min-h-[164px] bottom-0 share-chat-continue-button-bg flex items-center justify-center">
        <ColoredButton
          buttonText="이 대화 이어가기"
          color="default"
          textColor="white"
          width={260}
          onClick={handleContinueButtonClick}
        />
      </div>
    </div>
  );
}
