"use client";

import ChatBox from "@/components/chat/chat-box";
import useRequireLogin from "@/hooks/useRequireLogin";
export default function ChatPage() {
  useRequireLogin();
  return <ChatBox />;
}
