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
      title: "알림",
      content: "비활성화 된 기능입니다.\n관리자에게 문의해주세요.",
      handleCancel: () => {},
      handleOk: () => {},
    });
  };

  const handleRouteButton = (path: string) => {
    router.push(path);
  };

  return (
    <div className="mt-7 flex flex-col items-center gap-2 flex-1">
      {/* <SidebarMenuButton
        text="알림"
        onClick={toggleNotification}
        type="notification"
        notificationCount={0}
      /> */}
      <SidebarMenuButton
        text="검출 알림"
        onClick={() => handleRouteButton("/detection-request")}
        type="detection-request"
      />
      <SidebarMenuButton
        text="소명 관리"
        onClick={() => handleRouteButton("/message-management")}
        type="message-management"
      />
      <SidebarMenuButton
        text="사용자 관리"
        onClick={() => handleRouteButton("/user-management")}
        type="user-management"
      />
      <SidebarMenuButton
        text="금칙어 관리"
        onClick={() => handleRouteButton("/forbidden-word-management")}
        type="forbidden-word-management"
      />
      {/* <SidebarMenuButton
        text="통계"
        onClick={handleDisabledButton}
        type="statistics"
      /> */}
      <SidebarMenuButton
        text="설정"
        onClick={handleDisabledButton}
        type="setting"
      />
    </div>
  );
}
