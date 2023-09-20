import { useRef, useState } from "react";

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
import postShareScrap from "@/apis/post-share-scrap";
import deleteShareScrap from "@/apis/delete-share-scrap";

type PromptSharedChatBoxProps = {
  containerRef: React.RefObject<HTMLDivElement>;
};

export function PromptSharedChatBox({
  containerRef,
}: PromptSharedChatBoxProps) {
  const { chatData, sharePostData, setSharePostData } = useStore();
  const bottomRef = useRef<HTMLDivElement>(null);
  const isBottom = useBottomScrollListener(containerRef);

  const handleClickToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const { mutate: mutateLike } = useMutation(
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
  const { mutate: mutateScrap } = useMutation(
    sharePostData.scrap ? postShareScrap : deleteShareScrap,
    {
      onMutate: () => {
        const previousData = sharePostData;
        setSharePostData({
          ...sharePostData,
          scrap: !sharePostData.scrap,
        });
        return previousData;
      },
      onError: (error, variables, previousData) => {
        setSharePostData(previousData!);
      },
    }
  );

  const handleScrapButton = () => {
    mutateScrap({ postId: sharePostData.id });
  };

  const handleLikeButton = () => {
    mutateLike({ postId: sharePostData.id });
  };

  return (
    <div className="mx-4 md:mx-7 lg:mx-12 xl:mx-40 2xl:mx-60 mt-14 mb-8">
      {!isBottom && <PromptBottomButton onClick={handleClickToBottom} />}
      <PromptLikeButton
        onClick={handleLikeButton}
        isLiked={sharePostData.like}
      />
      <PromptScrapButton
        onClick={handleScrapButton}
        isScraped={sharePostData.scrap}
      />

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
