import SidebarLayout from "@/components/chat/sidebar/sidebar-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seity | 채팅",
  description: "대화형 인공지능 챗봇",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SidebarLayout>{children}</SidebarLayout>;
}
