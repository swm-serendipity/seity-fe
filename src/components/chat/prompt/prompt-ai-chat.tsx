import Image from "next/image";
import ChatResponseMarkdownParser from "../../ui/markdown/chat-markdown-parser";

type PromptAIChatProps = {
  text: string;
};

export default function PromptAIChat({ text }: PromptAIChatProps) {
  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
  };
  return (
    <div className="flex mt-6 max-w-[100%]">
      <div className="mr-4 rounded-full bg-gray-300 w-11 h-11 min-w-11 justify-end items-end hidden lg:flex"></div>
      <div className="flex-col bg-prompt-chat-ai-bg-color px-6 pt-3 pb-3 rounded-br-3xl rounded-se-3xl rounded-bl-3xl w-auto max-w-[560px] 2xl:max-w-[640px]">
        <ChatResponseMarkdownParser text={text} />
        <div className="flex">
          <button className="mx-1">
            <Image
              src="/prompt-copy.png"
              width={32}
              height={32}
              alt="프롬프트 복사"
              onClick={handleCopy}
            />
          </button>
          <button className="mx-1">
            <Image
              src="/prompt-favorite.png"
              width={32}
              height={32}
              alt="프롬프트 즐겨찾기"
            />
          </button>
          <button className="mx-1">
            <Image
              src="/prompt-share.png"
              width={32}
              height={32}
              alt="프롬프트 공유"
            />
          </button>
        </div>
      </div>
      <div className="justify-end items-end" />
    </div>
  );
}
