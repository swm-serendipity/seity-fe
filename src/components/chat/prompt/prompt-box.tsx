import PromptAiSelectBox from "./prompt-ai-select-box";
import PromptInputBox from "./prompt-input-box";
import { PromptChatBox } from "./prompt-chat-box";
import { useRef } from "react";
import PromptEmpty from "./prompt-empty";
import { usePathname } from "next/navigation";
import { useStore } from "@/store/store";

export default function PromptBox() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathName = usePathname();
  const { chatData } = useStore();

  const isChatEmpty = chatData.length === 0 && pathName === "/chat";

  return (
    <div className="flex flex-col flex-1 h-screen bg-white z-10">
      <div ref={containerRef} className="flex flex-col flex-1 overflow-y-auto">
        <PromptAiSelectBox />
        {isChatEmpty && <PromptEmpty />}
        <PromptChatBox containerRef={containerRef} />
      </div>
      <PromptInputBox />
    </div>
  );
}
