import { Dispatch, SetStateAction } from "react";
import {
  FoldIconButton,
  NotificationIconButton,
  PopularPromptButton,
} from "./sidebar-menu-buttons";
import { useStore } from "@/store/store";
import { useRouter } from "next/navigation";

type SidebarHiddenButtonProps = {
  showSidebar: boolean;
  setShowSidebar: Dispatch<SetStateAction<boolean>>;
};

export default function SidebarHiddenButton({
  showSidebar,
  setShowSidebar,
}: SidebarHiddenButtonProps) {
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
      <NotificationIconButton isAlert={true} onClick={toggleNotification} />
      <PopularPromptButton onClick={handlePopularPromptButton} />
    </div>
  );
}
