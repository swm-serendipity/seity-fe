import SideBarBox from "@/components/sidebar/sidebar-box";
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
  return (
    <div className="flex h-screen">
      <SideBarBox />
      <div className="flex-grow">{children}</div>
    </div>
  );
}
