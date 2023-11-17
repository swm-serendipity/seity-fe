import { Tooltip } from "react-tooltip";
import PromptAiSelectButton from "./prompt-ai-select-button";
import { useStore } from "@/store/store";

export default function PromptAiSelectBox() {
  const { chatLLM, setChatLLM, chatData } = useStore();
  const setChatAi = (ai: "gpt-3.5-turbo" | "gpt-4") => {
    setChatLLM(ai);
  };
  const isChatEmpty = chatData.length === 0;

  return (
    <div className="flex text-center w-full justify-center pt-10">
      <div
        className={`${
          isChatEmpty
            ? "w-[120px] lg:w-[320px] h-[62px]"
            : " w-[80px] lg:w-[180px] h-[62px]"
        } flex items-center bg-prompt-ai-select-bg rounded-lg gap-2.5 justify-center`}
      >
        <Tooltip id="llm-button-tooltip" />
        {isChatEmpty ? (
          <>
            <a
              data-tooltip-id="llm-button-tooltip"
              data-tooltip-content="ChatGPT 3.5 Turbo는 응답속도가 빠르고, 비용이 효율적이에요."
              data-tooltip-place="bottom"
            >
              <PromptAiSelectButton
                text="ChatGPT-3.5"
                isActive={chatLLM == "gpt-3.5-turbo"}
                setAi={() => {
                  setChatAi("gpt-3.5-turbo");
                }}
              />
            </a>
            <a
              data-tooltip-id="llm-button-tooltip"
              data-tooltip-content="ChatGPT 4.0은 정교한 이해 능력과 생성 능력을 제공해요."
              data-tooltip-place="bottom"
            >
              <PromptAiSelectButton
                text="ChatGPT-4.0"
                isActive={chatLLM == "gpt-4"}
                setAi={() => {
                  setChatAi("gpt-4");
                }}
              />
            </a>
          </>
        ) : chatLLM == "gpt-3.5-turbo" ? (
          <a
            data-tooltip-id="llm-button-tooltip"
            data-tooltip-content="ChatGPT 3.5 Turbo로 대화한 프롬프트에요. LLM을 바꿀려면 새로운 채팅을 시작해주세요."
            data-tooltip-place="bottom"
          >
            <PromptAiSelectButton
              text="ChatGPT-3.5"
              isActive={chatLLM == "gpt-3.5-turbo"}
              setAi={() => {
                setChatAi("gpt-3.5-turbo");
              }}
            />
          </a>
        ) : (
          <a
            data-tooltip-id="llm-button-tooltip"
            data-tooltip-content="ChatGPT 4.0으로 대화한 프롬프트에요. LLM을 바꿀려면 새로운 채팅을 시작해주세요."
            data-tooltip-place="bottom"
          >
            <PromptAiSelectButton
              text="ChatGPT-4.0"
              isActive={chatLLM == "gpt-4"}
              setAi={() => {
                setChatAi("gpt-4");
              }}
            />
          </a>
        )}
      </div>
    </div>
  );
}
