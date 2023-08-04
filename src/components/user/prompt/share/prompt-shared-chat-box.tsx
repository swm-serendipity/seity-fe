import { useRef } from "react";

import { useStore } from "@/store/store";
import PromptAIChat from "../prompt-ai-chat";
import PromptUserChat from "../prompt-user-chat";

export function PromptSharedChatBox() {
  const bottomRef = useRef<HTMLDivElement>(null);
  const { chatData } = useStore();

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
      <div ref={bottomRef} className="pb-40" />
    </div>
  );
}
