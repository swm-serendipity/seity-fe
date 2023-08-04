import { useLayoutEffect, useRef, useState } from "react";

import { useStore } from "@/store/store";
import PromptAIChat from "../prompt-ai-chat";
import PromptUserChat from "../prompt-user-chat";

export function PromptSharedChatBox() {
  const bottomRef = useRef<HTMLDivElement>(null);
  const { chatData } = useStore();
  const [isInitialChat, setIsInitialChat] = useState(true);

  useLayoutEffect(() => {
    if (chatData.length >= 1 && isInitialChat) {
      setIsInitialChat(false);
      bottomRef.current?.scrollIntoView({ behavior: "instant" });
    } else if (chatData.length === 0 && !isInitialChat) {
      setIsInitialChat(true);
    }
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
