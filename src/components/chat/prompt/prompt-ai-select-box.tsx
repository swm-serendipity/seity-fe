import PromptAiSelectButton from "./prompt-ai-select-button";

export default function PromptAiSelectBox() {
  return (
    <div className="w-[240px] lg:w-[620px] h-[62px] flex items-center bg-prompt-ai-select-bg rounded-lg gap-2.5 justify-center">
      <PromptAiSelectButton text="GPT-3.5" />
      <PromptAiSelectButton text="GPT-4.0" />
      <PromptAiSelectButton text="Bard" />
      <PromptAiSelectButton text="Hyper Clova X" />
    </div>
  );
}
