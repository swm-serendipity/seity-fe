import { useState } from "react";
import PromptAiSelectButton from "./prompt-ai-select-button";
import { useStore } from "@/store/store";

export default function PromptAiSelectBox() {
  const [chatAi, setChatAi] = useState("GPT-3.5");
  const { setPopupData } = useStore();

  return (
    <div className="flex text-center w-full justify-center pt-10">
      <div className="w-[120px] lg:w-[320px] h-[62px] flex items-center bg-prompt-ai-select-bg rounded-lg gap-2.5 justify-center">
        <PromptAiSelectButton
          text="GPT-3.5"
          isActive={chatAi == "GPT-3.5"}
          setAi={setChatAi}
        />
        <PromptAiSelectButton
          text="GPT-4.0"
          isActive={chatAi == "GPT-4.0"}
          setAi={setChatAi}
          isDisabled={true}
          onClick={() => {
            setPopupData({
              type: "title-ok",
              isVisible: true,
              title: "알림",
              content: "GPT-4.0은 비활성화 되어있어요.\n관리자에게 문의하세요.",
              handleCancel: () => {},
              handleOk: () => {},
            });
          }}
        />
        {/* Todo */}
        {/* <PromptAiSelectButton
          text="Bard"
          isActive={chatAi == "Bard"}
          setAi={setChatAi}
        />
        <PromptAiSelectButton
          text="Hyper Clova X"
          isActive={chatAi == "Hyper Clova X"}
          setAi={setChatAi}
        /> */}
      </div>
    </div>
  );
}
