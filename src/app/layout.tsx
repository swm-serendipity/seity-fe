import "@/styles/global-styles.css";
import { Metadata } from "next";
import ReactQueryProvider from "./react-query-provider";

export const metadata: Metadata = {
  title: "Seity AI Chatbot",
  description: "대화형 인공지능 보안 솔루션 : Seity",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
