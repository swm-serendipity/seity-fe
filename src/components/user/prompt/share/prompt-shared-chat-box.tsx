import { useRef } from "react";

import { useStore } from "@/store/store";
import PromptAIChat from "../prompt-ai-chat";
import PromptUserChat from "../prompt-user-chat";
import PromptBottomButton from "../prompt-bottom-button";
import useBottomScrollListener from "@/hooks/useBottomScrollListener";
import PromptLikeButton from "./prompt-like-button";
import PromptScrapButton from "./prompt-scrap-button";
import { useMutation } from "@tanstack/react-query";
import postShareLike from "@/apis/post-share-like";
import deleteShareLike from "@/apis/delete-share-like";

type PromptSharedChatBoxProps = {
  containerRef: React.RefObject<HTMLDivElement>;
};

export function PromptSharedChatBox({
  containerRef,
}: PromptSharedChatBoxProps) {
  const { chatData, setPopupData, sharePostData, setSharePostData } =
    useStore();
  const bottomRef = useRef<HTMLDivElement>(null);
  const isBottom = useBottomScrollListener(containerRef);

  const handleClickToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const { mutate } = useMutation(
    sharePostData.like ? postShareLike : deleteShareLike,
    {
      onMutate: () => {
        const previousData = sharePostData;
        setSharePostData({
          ...sharePostData,
          like: !sharePostData.like,
        });
        return previousData;
      },
      onError: (error, variables, previousData) => {
        setSharePostData(previousData!);
      },
    }
  );

  const handleScrapButton = () => {
    setPopupData({
      type: "title-ok",
      title: "아직 사용할 수 없는 기능이에요!",
      content: "스크랩 기능은 곧 사용하실 수 있도록 준비할게요!",
      handleCancel: () => {},
      handleOk: () => {},
      isVisible: true,
    });
  };

  const handleLikeButton = () => {
    mutate({ postId: sharePostData.id });
  };

  return (
    <div className="mx-4 md:mx-7 lg:mx-12 xl:mx-40 2xl:mx-60 mt-14 mb-8">
      {!isBottom && <PromptBottomButton onClick={handleClickToBottom} />}
      <PromptLikeButton
        onClick={handleLikeButton}
        isLiked={sharePostData.like}
      />
      <PromptScrapButton onClick={handleScrapButton} />

      {chatData.map((chat) => {
        if (chat.user === "user") {
          return <PromptUserChat key={chat.id} text={chat.message} />;
        } else if (chat.user === "ai") {
          return (
            <PromptAIChat key={chat.id} id={chat.id} text={chat.message} />
          );
        }
      })}
      <div ref={bottomRef} className="pb-40" />
    </div>
  );
}
