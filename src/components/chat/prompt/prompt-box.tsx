import PromptAiSelectBox from "./prompt-ai-select-box";
import PromptInputBox from "./prompt-input-box";

export default function PromptBox() {
  return (
    <div className="flex flex-col flex-1">
      <div className="flex-grow flex text-center w-full justify-center pt-10">
        <PromptAiSelectBox />
      </div>
      <div
        className="flex-grow-0 w-full min-h-[100px] flex justify-center items-center"
        style={{
          background: "#F5F5F5",
        }}
      >
        <PromptInputBox />
      </div>
    </div>
  );
}
