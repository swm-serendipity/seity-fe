import { useEffect, useRef } from "react";
import PromptAIChat from "./prompt-ai-chat";
import PromptUserChat from "./prompt-user-chat";

type PromptChatBoxProps = {
  chatList: Chat[];
};

export function PromptChatBox({ chatList }: PromptChatBoxProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatList]);
  return (
    <div className="mx-4 md:mx-7 lg:mx-10 xl:mx-40 2xl:mx-60 mt-14 mb-8">
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
