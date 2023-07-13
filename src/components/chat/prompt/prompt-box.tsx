import PromptAiSelectBox from "./prompt-ai-select-box";
import PromptInputBox from "./prompt-input-box";
import { PromptChatBox } from "./prompt-chat-box";
import { useEffect, useState } from "react";

export default function PromptBox() {
  const [chatList, setChatList] = useState<Chat[]>([
    {
      id: 1,
      user: "user",
      message: "안녕?",
      timestamp: Date.now().toString(),
    },
    {
      id: 2,
      user: "ai",
      message: "안녕하세요! 저는 ChatGPT입니다. 무엇을 도와드릴까요?",
      timestamp: Date.now().toString(),
    },
  ]);

  const [turn, setTurn] = useState<"user" | "ai">("user");

  return (
    <div className="flex flex-col flex-1 h-screen bg-white z-10">
      <div className="flex flex-col flex-1 overflow-y-auto">
        <PromptAiSelectBox />
        <PromptChatBox chatList={chatList} />
      </div>
      <PromptInputBox setChatList={setChatList} turn={turn} setTurn={setTurn} />
    </div>
  );
}
