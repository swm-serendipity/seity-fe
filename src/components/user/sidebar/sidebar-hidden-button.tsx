import { Dispatch, SetStateAction } from "react";
import {
  FoldIconButton,
  NotificationIconButton,
  PopularPromptButton,
} from "./sidebar-menu-buttons";
import { useStore } from "@/store/store";
import { useRouter } from "next/navigation";
import getNotificationCount from "@/apis/get-notification-count";
import { useQuery } from "@tanstack/react-query";

type SidebarHiddenButtonProps = {
  showSidebar: boolean;
  setShowSidebar: Dispatch<SetStateAction<boolean>>;
};

export default function SidebarHiddenButton({
  setShowSidebar,
}: SidebarHiddenButtonProps) {
  const { data } = useQuery(["notification-count"], getNotificationCount);
  const { toggleNotification } = useStore();
  const router = useRouter();

  const handlePopularPromptButton = () => {
    router.push("/posts/popular");
  };
  const handleFoldButton = () => {
    setShowSidebar(true);
  };

  return (
    <div className="absolute top-6 left-5 z-20 items-center hidden sm:flex">
      <FoldIconButton color="white" onClick={handleFoldButton} />
      <NotificationIconButton
        isAlert={data?.result.count}
        onClick={toggleNotification}
      />
      <PopularPromptButton onClick={handlePopularPromptButton} />
    </div>
  );
}
