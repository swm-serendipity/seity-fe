import { useStore } from "@/store/store";
import NotificationBox from "../../notification/notification-box";
import NotificationBackground from "../../notification/notification-background";
import { Fragment } from "react";
import SharePopupBox from "../../share-popup/share-popup-box";
import Popup from "../../../ui/popup/popup";
import PostsPopularLayout from "./posts-popular-layout";

export default function PostPopularBox() {
  const { isNotificationOpen, isSharePopupOpen, popupData } = useStore();
  return (
    <div className="relative flex w-full">
      <PostsPopularLayout />
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
