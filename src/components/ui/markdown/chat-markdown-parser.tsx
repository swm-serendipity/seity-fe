import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import PromptAIChatSyntaxHighlighter from "./chat-syntax-highlighter";
import "./markdown.css";

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
      className={`w-full relative ${isSharePopup && "text-body-medium"}`}
      remarkPlugins={[remarkGfm]}
      components={{
        table: ({ node, children, ...props }) => {
          return (
            <div className="w-full overflow-x-auto">
              <table className="min-w-full border-collapse border">
                {children}
              </table>
            </div>
          );
        },
        thead: ({ node, children, ...props }) => {
          return <thead className="bg-gray-200">{children}</thead>;
        },
        tbody: ({ node, children, ...props }) => {
          return <tbody>{children}</tbody>;
        },
        tr: ({ node, children, ...props }) => {
          return <tr>{children}</tr>;
        },
        td: ({ node, children, ...props }) => {
          return <td className="border px-2 py-1">{children}</td>;
        },
        th: ({ node, children, ...props }) => {
          return <th className="border px-2 py-1">{children}</th>;
        },
        ol: ({ node, children, ...props }) => {
          return <ol className="list-decimal list-inside py-3">{children}</ol>;
        },
        p: ({ node, children, ...props }) => {
          return (
            <p className={`${isSharePopup ? "py-0.5" : "py-2"}`}>{children}</p>
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
            <span className="font-bold overflow-auto" {...props}>
              <span className="break-all whitespace-pre-wrap">{children}</span>
            </span>
          );
        },
      }}
    >
      {text}
    </ReactMarkdown>
  );
}
