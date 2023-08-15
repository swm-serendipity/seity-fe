"use client";

import { useStore } from "@/store/store";
import NotificationBox from "../../notification/notification-box";
import NotificationBackground from "../../notification/notification-background";
import { Fragment } from "react";
import SharePopupBox from "../../share-popup/share-popup-box";
import Popup from "../../../ui/popup/popup";
import PostsAllHeader from "./posts-all-header";
import PostsMainSection from "./posts-main-section";

export default function PostAllBox() {
  const { isNotificationOpen, isSharePopupOpen, popupData } = useStore();

  return (
    <div className="relative flex flex-grow w-full overflow-clip">
      <div className="flex flex-col flex-1 h-screen bg-[#FAFBFD] z-10 w-full overflow-auto">
        <PostsAllHeader />
        <PostsMainSection />
      </div>
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
