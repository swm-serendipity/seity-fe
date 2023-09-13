import { useStore } from "@/store/store";
import NotificationBox from "../common/notification/notification-box";
import NotificationBackground from "../common/notification/notification-background";
import { Fragment } from "react";
import SharePopupBox from "./share-popup/share-popup-box";
import Popup from "../ui/popup/popup";
import PromptSharedBox from "./prompt/share/prompt-shared-box";

export default function ShareBox() {
  const { isNotificationOpen, isSharePopupOpen, popupData } = useStore();
  return (
    <div className="relative flex w-full">
      <PromptSharedBox />
      {popupData.isVisible && <Popup />}
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
