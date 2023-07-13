import { useState } from "react";
import PromptAiSelectButton from "./prompt-ai-select-button";

export default function PromptAiSelectBox() {
  const [chatAi, setChatAi] = useState("GPT-3.5");

  return (
    <div className="flex text-center w-full justify-center pt-10">
      <div className="w-[240px] lg:w-[620px] h-[62px] flex items-center bg-prompt-ai-select-bg rounded-lg gap-2.5 justify-center">
        <PromptAiSelectButton
          text="GPT-3.5"
          isActive={chatAi == "GPT-3.5"}
          setAi={setChatAi}
        />
        <PromptAiSelectButton
          text="GPT-4.0"
          isActive={chatAi == "GPT-4.0"}
          setAi={setChatAi}
        />
        <PromptAiSelectButton
          text="Bard"
          isActive={chatAi == "Bard"}
          setAi={setChatAi}
        />
        <PromptAiSelectButton
          text="Hyper Clova X"
          isActive={chatAi == "Hyper Clova X"}
          setAi={setChatAi}
        />
      </div>
    </div>
  );
}
