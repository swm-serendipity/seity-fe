import { useRef } from "react";

import { useStore } from "@/store/store";
import PromptAIChat from "../prompt-ai-chat";
import PromptUserChat from "../prompt-user-chat";
import PromptBottomButton from "../prompt-bottom-button";
import useBottomScrollListener from "@/hooks/useBottomScrollListener";

type PromptSharedChatBoxProps = {
  containerRef: React.RefObject<HTMLDivElement>;
};

export function PromptSharedChatBox({
  containerRef,
}: PromptSharedChatBoxProps) {
  const bottomRef = useRef<HTMLDivElement>(null);
  const isBottom = useBottomScrollListener(containerRef);

  const handleClickToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const { chatData } = useStore();

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
      <div ref={bottomRef} className="pb-40" />
    </div>
  );
}
