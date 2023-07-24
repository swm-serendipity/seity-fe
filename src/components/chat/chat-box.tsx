import { useStore } from "@/store/store";
import PromptBox from "./prompt/prompt-box";
import DeIdentificationPopupBox from "./de-identification-popup/de-identification-popup.box";
import NotificationBox from "./notification/notification-box";
import NotificationBackground from "./notification/notification-background";
import { Fragment } from "react";
import ShareBox from "./share/share-box";

export default function ChatBox() {
  const isDeIdentificationPopupOpen = useStore(
    (state) => state.isDeIdentificationPopupOpen
  );
  const isNotificationOpen = useStore((state) => state.isNotificationOpen);
  const isSharePopupOpen = useStore((state) => state.isSharePopupOpen);

  return (
    <div className="relative flex w-full">
      <PromptBox />
      {isDeIdentificationPopupOpen && <DeIdentificationPopupBox />}
      {isNotificationOpen && (
        <Fragment>
          <NotificationBackground />
          <NotificationBox />
        </Fragment>
      )}
      {isSharePopupOpen && <ShareBox />}
    </div>
  );
}
