import { useStore } from "@/store/store";
import PromptBox from "./prompt/prompt-box";
import DeIdentificationPopupBox from "./de-identification-popup/de-identification-popup.box";
import NotificationBox from "./notification/notification-box";
import NotificationBackground from "./notification/notification-background";
import { Fragment } from "react";
import SharePopupBox from "./share-popup/share-popup-box";
import Popup from "../ui/popup/popup";

export default function ChatBox() {
  const {
    isDeIdentificationPopupOpen,
    isNotificationOpen,
    isSharePopupOpen,
    popupData,
  } = useStore();
  return (
    <div className="relative flex w-full">
      <PromptBox />
      {popupData.isVisible && <Popup />}
      {isDeIdentificationPopupOpen && <DeIdentificationPopupBox />}
      {isNotificationOpen && (
        <Fragment>
          <NotificationBackground />
          <NotificationBox />
        </Fragment>
      )}
      {isSharePopupOpen && <SharePopupBox />}
    </div>
  );
}
