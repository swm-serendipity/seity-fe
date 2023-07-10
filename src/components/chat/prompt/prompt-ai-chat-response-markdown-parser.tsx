import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import PromptAIChatSyntaxHighlighter from "./prompt-ai-chat-syntax-highlighter";

type PromptAIChatResponseMarkdownParserProps = {
  text: string;
};

export default function PromptAIChatResponseMarkdownParser({
  text,
}: PromptAIChatResponseMarkdownParserProps) {
  return (
    <ReactMarkdown
      className="list-decimal"
      remarkPlugins={[remarkGfm]}
      components={{
        ol: ({ node, children, ...props }) => {
          return (
            <ol className="list-decimal list-inside py-3" {...props}>
              {children}
            </ol>
          );
        },
        p: ({ node, children, ...props }) => {
          return (
            <p className="py-2" {...props}>
              {children}
            </p>
          );
        },
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <PromptAIChatSyntaxHighlighter
              match={match}
              children={children}
              props={props}
            />
          ) : (
            <span className="font-bold" {...props}>
              '{children}'
            </span>
          );
        },
      }}
    >
      {text}
    </ReactMarkdown>
  );
}
