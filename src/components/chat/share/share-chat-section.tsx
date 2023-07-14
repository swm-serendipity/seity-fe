import { useStore } from "@/store/store";
import ShareUserChat from "./share-user-chat";
import ShareAIChat from "./share-ai-chat";

export default function ShareChatSection() {
  const { chatData } = useStore();

  return (
    <div className="w-full h-[354px] overflow-y-auto bg-share-chat-bg rounded-xl pb-4 custom-scrollbar pl-4">
      {chatData.map((chat) => {
        if (chat.user === "user") {
          return <ShareUserChat key={chat.id} text={chat.message} />;
        } else if (chat.user === "ai") {
          return <ShareAIChat key={chat.id} text={chat.message} />;
        }
      })}
    </div>
  );
}
