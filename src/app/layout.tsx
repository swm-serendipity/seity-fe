import "@/styles/global-styles.css";
import { Metadata } from "next";
import ReactQueryProvider from "./react-query-provider";

export const metadata: Metadata = {
  title: "대화형 인공지능 보안 솔루션 : Seity",
  description: "대화형 인공지능 보안 솔루션 : Seity",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="h-full">
      <body className="h-full">
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
