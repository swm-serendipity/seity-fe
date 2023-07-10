import {
  FoldIconButton,
  NotificationIconButton,
  PopularPromptButton,
} from "@/components/ui/icon-button";
import { Dispatch, SetStateAction } from "react";

type SidebarHiddenButtonProps = {
  showSidebar: boolean;
  setShowSidebar: Dispatch<SetStateAction<boolean>>;
};

export default function SidebarHiddenButton({
  showSidebar,
  setShowSidebar,
}: SidebarHiddenButtonProps) {
  const handleFoldButton = () => {
    setShowSidebar(true);
  };
  return (
    <div className="absolute top-6 left-5 z-0 items-center hidden sm:flex">
      <div className="hidden lg:block">
        <FoldIconButton color="white" onClick={handleFoldButton} />
      </div>
      <div className="ml-3.5 sm:block">
        <NotificationIconButton isAlert={true} onClick={() => {}} />
      </div>
      <div className="ml-2.5">
        <PopularPromptButton onClick={() => {}} />
      </div>
    </div>
  );
}
