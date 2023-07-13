"use client";
import { useStore } from "@/store/store";
import SideBarBox from "./sidebar/sidebar-box";
import PromptBox from "./prompt/prompt-box";
import SidebarHiddenButton from "./sidebar/sidbar-hidden-button";
import DeIdentificationPopupBox from "./de-identification-popup/de-identification-popup.box";
import useSidebarWindowResize from "@/hooks/useSidebarWindowResize";

export default function ChatBox() {
  const [showSidebar, setShowSidebar] = useSidebarWindowResize(true);
  const isPopupOpen = useStore((state) => state.isPopupOpen);

  return (
    <div className="h-screen relative flex">
      <SideBarBox showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <PromptBox />
      {!showSidebar && (
        <SidebarHiddenButton
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
        />
      )}
      {isPopupOpen && <DeIdentificationPopupBox />}
    </div>
  );
}
