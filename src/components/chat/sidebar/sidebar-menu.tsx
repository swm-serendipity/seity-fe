import { SidebarMenuButton } from "@/components/ui/sidebar-button";
import { useStore } from "@/store/store";

export default function SidebarMenu() {
  const { toggleNotification, setPopupData } = useStore();

  const handlePopularPromptButton = () => {
    setPopupData({
      isVisible: true,
      title: "아직 개발되지 않은 기능이에요!",
      content: "추후 더 멋있는 모습으로 공개할게요!",
      handleCancel: () => {},
      handleOk: () => {},
    });
  };

  return (
    <div className="mt-7 flex flex-col items-center gap-2">
      <SidebarMenuButton
        text="인기 프롬프트"
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
