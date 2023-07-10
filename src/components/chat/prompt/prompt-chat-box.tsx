import { RefObject, useEffect, useRef } from "react";
import PromptAIChat from "./prompt-ai-chat";
import PromptUserChat from "./prompt-user-chat";

type PromptChatBoxProps = {
  chatList: Chat[];
};

export function PromptChatBox({ chatList }: PromptChatBoxProps) {
  const bottomRef = useRef<HTMLDivElement>(document.createElement("div"));

  useEffect(() => {
    // 2. 새로운 메시지가 추가될 때마다 스크롤 이동
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatList]);
  return (
    <div className="mx-4 md:mx-7 lg:mx-10 xl:mx-20 2xl:mx-60">
      {chatList.map((chat) => {
        if (chat.user === "user") {
          return <PromptUserChat key={chat.id} text={chat.message} />;
        } else if (chat.user === "ai") {
          return <PromptAIChat key={chat.id} text={chat.message} />;
        }
      })}
      <div ref={bottomRef} />
    </div>
  );
}
