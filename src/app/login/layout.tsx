import "@/styles/global-styles.css";
import { Metadata } from "next";
import { Fragment } from "react";

export const metadata = {
  title: "Seity | 로그인",
  description: "대화형 인공지능 챗봇 솔루션, Seity로 로그인",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Fragment>{children}</Fragment>;
}
