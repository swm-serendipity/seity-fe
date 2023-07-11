import { ReactNode } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

type PromptAIChatSyntaxHighlighterProps = {
  match: RegExpExecArray;
  children: ReactNode & ReactNode[];
  props: any;
};

export default function PromptAIChatSyntaxHighlighter({
  match,
  children,
  ...props
}: PromptAIChatSyntaxHighlighterProps) {
  const handleCopy = async () => {
    await navigator.clipboard.writeText(String(children).replace(/\n$/, ""));
  };
  return (
    <div className="my-4 overflow-auto">
      <div className="bg-prompt-chat-ai-code-title-color w-full h-10 rounded-tl-md rounded-tr-md flex px-6 justify-between items-center">
        <span className="font-bold text-blackbg-default">Python</span>
        <button className="text-blackbg-default" onClick={handleCopy}>
          <p className="text-body-medium underline">copy code</p>
        </button>
      </div>
      <SyntaxHighlighter
        language={match[1]}
        PreTag="div"
        customStyle={{
          margin: 0,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          paddingBottom: 30,
          wordBreak: "break-all",
          whiteSpace: "pre-wrap",
        }}
        {...props}
        style={oneDark}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    </div>
  );
}
