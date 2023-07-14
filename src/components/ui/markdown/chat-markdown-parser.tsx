import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import PromptAIChatSyntaxHighlighter from "./chat-syntax-highlighter";

type ChatResponseMarkdownParserProps = {
  text: string;
  isSharePopup?: boolean;
};

export default function ChatResponseMarkdownParser({
  text,
  isSharePopup = false,
}: ChatResponseMarkdownParserProps) {
  return (
    <ReactMarkdown
      className={`list-decimal w-full relative ${
        isSharePopup && "text-body-medium"
      }`}
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
            <p className={`${isSharePopup ? "py-0.5" : "py-2"}`} {...props}>
              {children}
            </p>
          );
        },
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <PromptAIChatSyntaxHighlighter
              match={match}
              props={props}
              isSharePopup={isSharePopup}
            >
              {children}
            </PromptAIChatSyntaxHighlighter>
          ) : (
            <span className="font-bold" {...props}>
              &apos;{children}&apos;
            </span>
          );
        },
      }}
    >
      {text}
    </ReactMarkdown>
  );
}
