import { ColoredButton } from "@/components/ui/color-button";
import { PromptSharedChatBox } from "./prompt-shared-chat-box";
import { useStore } from "@/store/store";
import { useRef } from "react";
import { useMutation } from "@tanstack/react-query";
import postSharePromptImport from "@/apis/post-share-prompt-import";
import { usePathname, useRouter } from "next/navigation";
import PromptSharedPostsData from "./prompt-shared-posts-data";

export default function PromptSharedBox() {
  const pathName = usePathname();
  const router = useRouter();
  const id = pathName.split("/share/")[1];
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  const { setPopupData } = useStore();
  const { mutate, isLoading } = useMutation(postSharePromptImport, {
    onSuccess: (data) => {
      router.push(`${baseURL}/chat/${data.result.sessionId}`);
    },
    onError: (error: any) => {
      const isKnownError = error.response.data.message != undefined;
      setPopupData({
        type: "title-ok",
        isVisible: true,
        title: "에러",
        content: isKnownError
          ? error.response.data.message
          : "알 수 없는 에러가 발생했습니다. 잠시후 다시 시도해주세요.",
        handleCancel: () => {},
        handleOk: () => {},
      });
    },
  });
  const handleContinueButtonClick = () => {
    mutate({ postId: id });
  };

  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="flex flex-col flex-1 h-screen bg-white z-10 overflow-y-auto"
      ref={containerRef}
    >
      <PromptSharedPostsData />
      <div className="flex flex-col flex-1">
        <PromptSharedChatBox containerRef={containerRef} />
      </div>
      <div className="absolute w-full min-h-[164px] bottom-0 share-chat-continue-button-bg flex items-center justify-center">
        <ColoredButton
          buttonText="이 대화 이어가기"
          color="default"
          textColor="white"
          width={260}
          onClick={handleContinueButtonClick}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}
