import PromptAiSelectButton from "./prompt-ai-select-button";
import { useStore } from "@/store/store";

export default function PromptAiSelectBox() {
  const { setPopupData, chatLLM, setChatLLM } = useStore();
  const setChatAi = (ai: "chatGPT3.5" | "chatGPT4.0") => {
    setChatLLM(ai);
  };

  return (
    <div className="flex text-center w-full justify-center pt-10">
      <div className="w-[120px] lg:w-[320px] h-[62px] flex items-center bg-prompt-ai-select-bg rounded-lg gap-2.5 justify-center">
        <PromptAiSelectButton
          text="GPT-3.5"
          isActive={chatLLM == "chatGPT3.5"}
          setAi={() => {
            setChatAi("chatGPT3.5");
          }}
        />
        <PromptAiSelectButton
          text="GPT-4.0"
          isActive={chatLLM == "chatGPT4.0"}
          setAi={() => {
            setChatAi("chatGPT4.0");
          }}
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
