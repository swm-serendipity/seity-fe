import Image from "next/image";
import ChatResponseMarkdownParser from "../../ui/markdown/chat-markdown-parser";
import Lottie from "lottie-react";
import loadingLottie from "../../assets/chat-word-box-loading-animation.json";
import { useStore } from "@/store/store";

type PromptAIChatProps = {
  id: string;
  text: string;
};

export default function PromptAIChat({ id, text }: PromptAIChatProps) {
  const { isAnswering, setPopupData } = useStore();

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
  };

  const handleShare = () => {
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
    <div className="flex mt-6 max-w-[100%]">
      <div className="mr-4 rounded-full bg-whitebg-default w-11 h-11 min-w-11 justify-center items-center hidden lg:flex">
        <Image
          priority
          src="/chat-ai-profile.png"
          width={24}
          height={24}
          alt="icon"
        />
      </div>
      <div className="flex-col bg-prompt-chat-ai-bg-color px-6 pt-3 pb-3 rounded-br-3xl rounded-se-3xl rounded-bl-3xl w-auto max-w-[560px] 2xl:max-w-[640px]">
        {text.length > 0 ? (
          <div>
            <ChatResponseMarkdownParser text={text} />
            <div className="flex">
              <button className="mx-1">
                <Image
                  priority
                  src="/prompt-copy.png"
                  width={32}
                  height={32}
                  alt="프롬프트 복사"
                  onClick={handleCopy}
                />
              </button>
              <button className="mx-1">
                <Image
                  priority
                  src="/prompt-share.png"
                  width={32}
                  height={32}
                  alt="프롬프트 공유"
                  onClick={handleShare}
                />
              </button>
            </div>
          </div>
        ) : (
          <div className="w-[60px] h-[20px] flex items-center">
            <Lottie animationData={loadingLottie} />
          </div>
        )}
      </div>
      <div className="justify-end items-end" />
    </div>
  );
}
