import { SidebarMenuButton } from "@/components/ui/sidebar-button";
import { useStore } from "@/store/store";
import { useRouter } from "next/navigation";

export default function SidebarMenu() {
  const { toggleNotification, setPopupData } = useStore();
  const router = useRouter();
  const handleDisabledButton = () => {
    setPopupData({
      type: "title-ok",
      isVisible: true,
      title: "아직 개발되지 않은 기능이에요!",
      content: "추후 더 멋있는 모습으로 공개할게요!",
      handleCancel: () => {},
      handleOk: () => {},
    });
  };

  const handleDashboardButton = () => {
    router.push("/dashboard");
  };

  return (
    <div className="mt-7 flex flex-col items-center gap-2">
      <SidebarMenuButton
        text="알림"
        onClick={toggleNotification}
        type="notification"
        notificationCount={0}
      />
      <SidebarMenuButton
        text="대시보드"
        onClick={handleDashboardButton}
        type="dashboard"
      />
      <SidebarMenuButton
        text="사용자 관리"
        onClick={handleDisabledButton}
        type="user-management"
      />
      <SidebarMenuButton
        text="통계"
        onClick={handleDisabledButton}
        type="statistics"
      />
      <SidebarMenuButton
        text="메시지 관리"
        onClick={handleDisabledButton}
        type="message-management"
      />
      <SidebarMenuButton
        text="금칙어 관리"
        onClick={handleDisabledButton}
        type="forbidden-word-management"
      />
      <SidebarMenuButton
        text="설정"
        onClick={handleDisabledButton}
        type="setting"
      />
    </div>
  );
}
