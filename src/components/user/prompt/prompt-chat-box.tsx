import { useEffect, useLayoutEffect, useRef, useState } from "react";
import PromptAIChat from "./prompt-ai-chat";
import PromptUserChat from "./prompt-user-chat";
import { useStore } from "@/store/store";
import useBottomScrollListener from "@/hooks/useBottomScrollListener";
import PromptBottomButton from "./prompt-bottom-button";

type PromptChatBoxProps = {
  containerRef: React.RefObject<HTMLDivElement>;
};

export function PromptChatBox({ containerRef }: PromptChatBoxProps) {
  const bottomRef = useRef<HTMLDivElement>(null);
  const { chatData, isAnswering, answeringData } = useStore();
  const [isLoading, setIsLoading] = useState(true);
  const isBottom = useBottomScrollListener(containerRef);
  const [isInitialChat, setIsInitialChat] = useState(true);

  const handleClickToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useLayoutEffect(() => {
    if (chatData.length >= 1 && isInitialChat) {
      setIsInitialChat(false);
      setIsLoading(false);
      bottomRef.current?.scrollIntoView({ behavior: "instant" });
    } else if (chatData.length === 0 && !isInitialChat) {
      setIsInitialChat(true);
    }
  }, [chatData]);

  useEffect(() => {
    if (isBottom) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatData, isBottom]);

  useEffect(() => {
    if (isBottom) {
      bottomRef.current?.scrollIntoView({ behavior: "auto" });
    }
  }, [answeringData.message]);

  return (
    <div className="mx-4 md:mx-7 lg:mx-12 xl:mx-40 2xl:mx-60 mt-14 mb-8">
      {!isBottom && <PromptBottomButton onClick={handleClickToBottom} />}
      {chatData.map((chat) => {
        if (chat.user === "user") {
          return <PromptUserChat key={chat.id} text={chat.message} />;
        } else if (chat.user === "ai") {
          return (
            <PromptAIChat key={chat.id} id={chat.id} text={chat.message} />
          );
        }
      })}
      {isAnswering && (
        <PromptAIChat id={answeringData!.id} text={answeringData!.message} />
      )}
      <div ref={bottomRef} />
    </div>
  );
}
