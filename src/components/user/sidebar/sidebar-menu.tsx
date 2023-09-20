import { SidebarMenuButton } from "@/components/ui/sidebar-button";
import { useStore } from "@/store/store";
import { useRouter } from "next/navigation";

export default function SidebarMenu() {
  const { toggleNotification } = useStore();
  const router = useRouter();
  const handlePopularPromptButton = () => {
    router.push("/posts/popular");
  };

  const handleScrapPromptButton = () => {
    router.push("/posts/scrap/1");
  };

  const handleMySharedPromptButton = () => {
    router.push("/posts/myshare/1");
  };

  return (
    <div className="mt-7 flex flex-col items-center gap-2">
      <SidebarMenuButton
        text="인기 프롬프트"
        onClick={handlePopularPromptButton}
        type="popular"
      />
      <SidebarMenuButton
        text="스크랩한 프롬프트"
        onClick={handleScrapPromptButton}
        type="scrap"
      />
      <SidebarMenuButton
        text="공유한 프롬프트"
        onClick={handleMySharedPromptButton}
        type="share"
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
