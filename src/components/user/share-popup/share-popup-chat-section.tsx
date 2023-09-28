import { useStore } from "@/store/store";
import ShareUserChat from "./share-popup-user-chat";
import ShareAIChat from "./share-popup-ai-chat";
import React from "react";

export default function ShareChatSection() {
  const { chatData } = useStore();

  return (
    <div className="w-auto h-[354px] overflow-y-auto bg-share-chat-bg rounded-xl pb-4 custom-scrollbar pl-4">
      {chatData.slice(0, 10).map((chat) => {
        if (chat.user === "user") {
          return <ShareUserChat key={chat.id} text={chat.message} />;
        } else if (chat.user === "ai") {
          return <ShareAIChat key={chat.id} text={chat.message} />;
        }
      })}
    </div>
  );
}
