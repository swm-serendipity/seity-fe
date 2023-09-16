import { memo } from "react";
import ChatResponseMarkdownParser from "../../ui/markdown/chat-markdown-parser";
import Image from "next/image";

type ShareAIChatProps = {
  text: string;
};

export default function ShareAIChat({ text }: ShareAIChatProps) {
  const ChatResponseMarkdownParserMemo = memo(ChatResponseMarkdownParser);

  return (
    <div className="flex mt-6 ml-4">
      <div className="mr-4 rounded-full bg-whitebg-default w-[30px] h-[30px] justify-center items-center hidden lg:flex">
        <Image
          priority
          src="/chat/chat-ai-profile.png"
          width={16}
          height={16}
          alt="icon"
        />
      </div>
      <div className="flex-col bg-prompt-chat-ai-bg-color px-5 pt-2.5 pb-2.5 rounded-br-3xl rounded-se-3xl rounded-bl-3xl max-w-[360px]">
        <ChatResponseMarkdownParserMemo text={text} isSharePopup />
      </div>
      <div className="justify-end items-end" />
    </div>
  );
}
