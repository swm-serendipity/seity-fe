import { useStore } from "@/store/store";
import ShareHeader from "./share-popup-header";
import ShareChatSection from "./share-popup-chat-section";
import ShareTitleSection from "./share-popup-title-section";
import ShareButtons from "./share-popup-buttons";
import { useMutation } from "@tanstack/react-query";
import postSharePrompt from "@/apis/post-share-prompt";
import Lottie from "lottie-react";
import loadingLottie from "../../assets/loading-animation.json";

export default function SharePopupBox() {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

  const { toggleSharePopup, setPopupData } = useStore();
  const handleCopy = async (text: string) => {
    await navigator.clipboard.writeText(text);
  };
  const { mutate, isLoading } = useMutation(postSharePrompt, {
    onSuccess: (data) => {
      toggleSharePopup();
      handleCopy(`${baseURL}/share/${data.result.id}`);
      setPopupData({
        type: "title-ok",
        isVisible: true,
        title: "공유완료!",
        content:
          "정상적으로 공유되었습니다.\n공유된 프롬프트 링크도 복사되었어요.",
        handleCancel: () => {},
        handleOk: () => {},
      });
    },
    onError: (error: any) => {
      toggleSharePopup();
      setPopupData({
        type: "title-ok",
        isVisible: true,
        title: "문제가 발생했어요!",
        content: `Error: ${error.response.data.message}\n\n잠시 후 다시 시도해주세요.`,
        handleCancel: () => {},
        handleOk: () => {},
      });
    },
  });

  const handleBox = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
  };
  const handleOutside = () => {
    if (isLoading) return;
    toggleSharePopup();
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-auto"
      onClick={handleOutside}
    >
      <div
        className="bg-white w-[550px] h-[664px] rounded-3xl flex flex-col relative"
        onClick={handleBox}
      >
        {isLoading && (
          <>
            <div
              className="fixed w-[550px] h-[664px] bg-black opacity-20 rounded-3xl"
              onClick={handleBox}
            />
            <Lottie
              animationData={loadingLottie}
              className="fixed left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2"
            />
          </>
        )}

        <div className="pt-6 pb-7.5 px-7.5">
          <ShareHeader />
          <ShareChatSection />
          <ShareTitleSection />
          <ShareButtons mutate={mutate} />
        </div>
      </div>
    </div>
  );
}
