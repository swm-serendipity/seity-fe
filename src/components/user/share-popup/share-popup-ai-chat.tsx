import { memo } from "react";
import ChatResponseMarkdownParser from "../../ui/markdown/chat-markdown-parser";

type ShareAIChatProps = {
  text: string;
};

export default function ShareAIChat({ text }: ShareAIChatProps) {
  const ChatResponseMarkdownParserMemo = memo(ChatResponseMarkdownParser);

  return (
    <div className="flex mt-6 ml-4">
      <div className="mr-2 rounded-full bg-gray-300 w-[30px] h-[30px] justify-end items-end flex"></div>
      <div className="flex-col bg-prompt-chat-ai-bg-color px-5 pt-2.5 pb-2.5 rounded-br-3xl rounded-se-3xl rounded-bl-3xl max-w-[360px]">
        <ChatResponseMarkdownParserMemo text={text} isSharePopup />
      </div>
      <div className="justify-end items-end" />
    </div>
  );
}
