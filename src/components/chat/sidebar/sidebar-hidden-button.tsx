import { Dispatch, SetStateAction } from "react";
import {
  FoldIconButton,
  NotificationIconButton,
  PopularPromptButton,
} from "./sidebar-menu-buttons";
import { useStore } from "@/store/store";

type SidebarHiddenButtonProps = {
  showSidebar: boolean;
  setShowSidebar: Dispatch<SetStateAction<boolean>>;
};

export default function SidebarHiddenButton({
  showSidebar,
  setShowSidebar,
}: SidebarHiddenButtonProps) {
  const { toggleNotification, setPopupData } = useStore();

  const handlePopularPromptButton = () => {
    setPopupData({
      type: "title-ok",
      isVisible: true,
      title: "아직 개발되지 않은 기능이에요!",
      content: "추후 더 멋있는 모습으로 공개할게요!",
      handleCancel: () => {},
      handleOk: () => {},
    });
  };
  const handleFoldButton = () => {
    setShowSidebar(true);
  };

  return (
    <div className="absolute top-6 left-5 z-20 items-center hidden sm:flex">
      <FoldIconButton color="white" onClick={handleFoldButton} />
      <NotificationIconButton isAlert={true} onClick={toggleNotification} />
      <PopularPromptButton onClick={handlePopularPromptButton} />
    </div>
  );
}
