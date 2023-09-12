"use client";

import { useStore } from "@/store/store";
import NotificationBox from "../../notification/notification-box";
import NotificationBackground from "../../notification/notification-background";
import { Fragment, useState } from "react";
import SharePopupBox from "../../share-popup/share-popup-box";
import Popup from "../../../ui/popup/popup";
import PostsAllHeader from "./posts-all-header";
import PostsMainSection from "./posts-main-section";
import { useQuery } from "@tanstack/react-query";
import getRecentSharedPrompt from "@/apis/get-recent-shared-prompt";
import getScrapedSharedPrompt from "@/apis/get-scraped-shared-prompt";

type Props = {
  type: "all" | "scrap" | "share";
};

export default function PostAllBox({ type }: Props) {
  const { isNotificationOpen, isSharePopupOpen, popupData } = useStore();
  const [currentPage, setCurrentPage] = useState(1);

  const getQueryKey = () => {
    if (type === "all") return "recent-shared-prompt";
    else if (type === "scrap") return "recent-scrap-prompt";
    else return "recent-shared-prompt";
  };

  const getQueryFunction = () => {
    if (type === "all") return getRecentSharedPrompt;
    else if (type === "scrap") return getScrapedSharedPrompt;
    else return getRecentSharedPrompt;
  };

  const { data, isLoading } = useQuery(
    [getQueryKey(), { pageNumber: currentPage - 1, pageSize: 3 }],
    getQueryFunction()
  );
  if (isLoading) return <div></div>;

  return (
    <div className="relative flex flex-grow w-full overflow-clip">
      <div className="flex flex-col flex-1 h-screen bg-[#FAFBFD] z-10 w-full overflow-auto">
        <PostsAllHeader type={type} />
        <PostsMainSection
          type={type}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          data={data}
        />
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
