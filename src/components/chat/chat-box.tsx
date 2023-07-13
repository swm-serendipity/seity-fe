"use client";
import { useStore } from "@/store/store";
import SideBarBox from "./sidebar/sidebar-box";
import PromptBox from "./prompt/prompt-box";
import SidebarHiddenButton from "./sidebar/sidbar-hidden-button";
import DeIdentificationPopupBox from "./de-identification-popup/de-identification-popup.box";
import useSidebarWindowResize from "@/hooks/useSidebarWindowResize";
import NotificationBox from "./notification/notification-box";
import NotificationBackground from "./notification/notification-background";
import { Fragment } from "react";

export default function ChatBox() {
  const [showSidebar, setShowSidebar, showHiddenButton, setShowHiddenButton] =
    useSidebarWindowResize(true);
  const isPopupOpen = useStore((state) => state.isPopupOpen);
  const isNotificationOpen = useStore((state) => state.isNotificationOpen);

  return (
    <div className="h-screen relative flex">
      <SideBarBox
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        setShowHiddenButton={setShowHiddenButton}
      />
      <PromptBox />
      {showHiddenButton && (
        <SidebarHiddenButton
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
        />
      )}
      {isPopupOpen && <DeIdentificationPopupBox />}
      {isNotificationOpen && (
        <Fragment>
          <NotificationBackground />
          <NotificationBox showSidebar={showSidebar} />
        </Fragment>
      )}
    </div>
  );
}
