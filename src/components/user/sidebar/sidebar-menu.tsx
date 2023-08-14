import { SidebarMenuButton } from "@/components/ui/sidebar-button";
import { useStore } from "@/store/store";
import { useRouter } from "next/navigation";

export default function SidebarMenu() {
  const { toggleNotification } = useStore();
  const router = useRouter();
  const handlePopularPromptButton = () => {
    router.push("/posts/popular");
  };

  return (
    <div className="mt-7 flex flex-col items-center gap-2">
      <SidebarMenuButton
        text="스크랩한 프롬프트"
        onClick={handlePopularPromptButton}
        type="popular"
      />
      <SidebarMenuButton
        text="알림"
        onClick={toggleNotification}
        type="notification"
        notificationCount={0}
      />
    </div>
  );
}