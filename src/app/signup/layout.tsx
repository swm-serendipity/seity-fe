import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seity | 회원가입",
  description: "대화형 인공지능 챗봇 솔루션, Seity로 회원가입",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
