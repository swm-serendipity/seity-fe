import { useStore } from "@/store/store";
import PromptBox from "./prompt/prompt-box";
import DeIdentificationPopupBox from "./de-identification-popup/de-identification-popup.box";
import NotificationBox from "../common/notification/notification-box";
import NotificationBackground from "../common/notification/notification-background";
import { Fragment } from "react";
import SharePopupBox from "./share-popup/share-popup-box";
import Popup from "../ui/popup/popup";
import SensitivePopupBox from "./sensitive-popup/sensitive-popup.box";

export default function ChatBox() {
  const {
    isDeIdentificationPopupOpen,
    isSensitiveDataPopupOpen,
    isNotificationOpen,
    isSharePopupOpen,
    popupData,
  } = useStore();
  return (
    <div className="relative flex w-full">
      <PromptBox />
      {popupData.isVisible && <Popup />}
      {isSensitiveDataPopupOpen && <SensitivePopupBox />}
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
