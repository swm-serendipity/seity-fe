"use client";

import { useStore } from "@/store/store";
import NotificationBox from "../../../common/notification/notification-box";
import NotificationBackground from "../../../common/notification/notification-background";
import { Fragment, useEffect } from "react";
import SharePopupBox from "../../share-popup/share-popup-box";
import Popup from "../../../ui/popup/popup";
import PostsAllHeader from "./posts-all-header";
import PostsMainSection from "./posts-main-section";
import { useQuery } from "@tanstack/react-query";
import getRecentSharedPrompt from "@/apis/get-recent-shared-prompt";
import getScrapedSharedPrompt from "@/apis/get-scraped-shared-prompt";
import { usePathname, useRouter } from "next/navigation";
import getMySharedPrompt from "@/apis/get-my-shared-prompt";

type PostAllBoxProps = {
  type: "all" | "scrap" | "myshare";
};

export default function PostAllBox({ type }: PostAllBoxProps) {
  const { isNotificationOpen, isSharePopupOpen, popupData } = useStore();

  const path = usePathname();
  const router = useRouter();
  const currentPage = Number(path.split(`${type}/`)[1]);

  useEffect(() => {
    if (!!Number(path.split(`${type}/`)[1])) {
    } else {
      router.replace(`/posts/${type}/1`);
    }
  }, []);

  const getQueryKey = () => {
    if (type === "all") return "recent-shared-prompt";
    else if (type === "scrap") return "recent-scrap-prompt";
    else return "recent-my-shared-prompt";
  };

  const getQueryFunction = () => {
    if (type === "all") return getRecentSharedPrompt;
    else if (type === "scrap") return getScrapedSharedPrompt;
    else return getMySharedPrompt;
  };

  const { data, isLoading, refetch } = useQuery(
    [getQueryKey(), { pageNumber: currentPage - 1, pageSize: 3 }],
    getQueryFunction()
  );
  if (isLoading) return <div></div>;

  return (
    <div className="relative flex flex-grow w-full overflow-clip">
      <div className="flex flex-col flex-1 h-screen bg-[#FAFBFD] z-10 w-full overflow-auto">
        <PostsAllHeader
          type={type}
          totalPostNumber={data.result.totalPostNumber!}
        />
        <PostsMainSection
          type={type}
          currentPage={currentPage}
          data={data}
          refetch={refetch}
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
