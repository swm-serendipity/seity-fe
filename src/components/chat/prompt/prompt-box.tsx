import PromptAiSelectBox from "./prompt-ai-select-box";
import PromptInputBox from "./prompt-input-box";
import { PromptChatBox } from "./prompt-chat-box";

export default function PromptBox() {
  return (
    <div className="flex flex-col flex-1 h-screen bg-white z-10">
      <div className="flex flex-col flex-1 overflow-y-auto">
        <PromptAiSelectBox />
        <PromptChatBox />
      </div>
      <PromptInputBox />
    </div>
  );
}
