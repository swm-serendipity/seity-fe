import PromptAiSelectBox from "./prompt-ai-select-box";
import PromptInputBox from "./prompt-input-box";
import { PromptChatBox } from "./prompt-chat-box";
import { useRef } from "react";

export default function PromptBox() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col flex-1 h-screen bg-white z-10">
      <div ref={containerRef} className="flex flex-col flex-1 overflow-y-auto">
        <PromptAiSelectBox />
        <PromptChatBox containerRef={containerRef} />
      </div>
      <PromptInputBox />
    </div>
  );
}
