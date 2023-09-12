import AdminSidebarLayout from "@/components/admin/sidebar/sidebar-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seity | 대시보드",
  description: "보안 관리 대시보드",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AdminSidebarLayout>{children}</AdminSidebarLayout>;
}
