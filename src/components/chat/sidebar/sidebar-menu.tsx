import { SidebarMenuButton } from "@/components/ui/sidebar-button";

export default function SidebarMenu() {
  return (
    <div className="mt-7 flex flex-col items-center gap-2">
      <SidebarMenuButton
        text="인기 프롬프트"
        onClick={() => {}}
        type="popular"
      />
      <SidebarMenuButton
        text="알림"
        onClick={() => {}}
        type="notification"
        notificationCount={21}
      />
    </div>
  );
}
