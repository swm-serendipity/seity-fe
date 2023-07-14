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
import ShareBox from "./share/share-box";

export default function ChatBox() {
  const [showSidebar, setShowSidebar, showHiddenButton, setShowHiddenButton] =
    useSidebarWindowResize(true);
  const isDeIdentificationPopupOpen = useStore(
    (state) => state.isDeIdentificationPopupOpen
  );
  const isNotificationOpen = useStore((state) => state.isNotificationOpen);
  const isSharePopupOpen = useStore((state) => state.isSharePopupOpen);

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
      {isDeIdentificationPopupOpen && <DeIdentificationPopupBox />}
      {isNotificationOpen && (
        <Fragment>
          <NotificationBackground />
          <NotificationBox showSidebar={showSidebar} />
        </Fragment>
      )}
      {isSharePopupOpen && <ShareBox />}
    </div>
  );
}
