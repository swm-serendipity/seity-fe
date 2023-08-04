"use client";

import ChatBox from "@/components/chat/chat-box";
import useFetchAndStoreChat from "@/hooks/usePromptFetchAndStoreChat";
import { usePathname } from "next/navigation";

export default function ChatPage() {
  const pathName = usePathname();
  const id = pathName.split("/chat/")[1];
  useFetchAndStoreChat(id);

  return <ChatBox />;
}
