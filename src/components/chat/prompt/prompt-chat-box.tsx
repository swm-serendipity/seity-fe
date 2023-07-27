import { useEffect, useRef } from "react";
import PromptAIChat from "./prompt-ai-chat";
import PromptUserChat from "./prompt-user-chat";
import { useStore } from "@/store/store";

export function PromptChatBox() {
  const bottomRef = useRef<HTMLDivElement>(null);
  const { chatData } = useStore();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatData]);
  return (
    <div className="mx-4 md:mx-7 lg:mx-12 xl:mx-40 2xl:mx-60 mt-14 mb-8">
      {chatData.map((chat) => {
        if (chat.user === "user") {
          return <PromptUserChat key={chat.id} text={chat.message} />;
        } else if (chat.user === "ai") {
          return (
            <PromptAIChat key={chat.id} id={chat.id} text={chat.message} />
          );
        }
      })}
      <div ref={bottomRef} />
    </div>
  );
}
