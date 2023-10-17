"use client";

import { useStore } from "@/store/store";
import NotificationBox from "../../../common/notification/notification-box";
import NotificationBackground from "../../../common/notification/notification-background";
import { Fragment } from "react";
import SharePopupBox from "../../share-popup/share-popup-box";
import Popup from "../../../ui/popup/popup";
import PostsPopularMainSection from "./posts-popular-main-section";
import PostsPopularSubSection from "./posts-popular-sub-section";
import { useQueries } from "@tanstack/react-query";
import getRecentSharedPrompt from "@/apis/get-recent-shared-prompt";
import getRecentHotPrompt from "@/apis/get-recent-hot-prompt";
import getAllHotPrompt from "@/apis/get-all-hot-prompt";
import Lottie from "lottie-react";
import loadingLottie from "@/components/assets/lottie/loading-animation.json";

export default function PostPopularBox() {
  const { isNotificationOpen, isSharePopupOpen, popupData } = useStore();
  const results = useQueries({
    queries: [
      {
        queryKey: ["recent-hot-prompt", { size: 4 }],
        queryFn: getRecentHotPrompt,
      },
      {
        queryKey: ["recent-shared-prompt", { pageNumber: 0, pageSize: 4 }],
        queryFn: getRecentSharedPrompt,
      },
      {
        queryKey: ["all-hot-prompt", { size: 4 }],
        queryFn: getAllHotPrompt,
      },
    ],
  });

  const handleLoading = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
  };

  const allQueriesLoaded = results.every((result) => !result.isLoading);

  if (!allQueriesLoaded)
    return (
      <>
        <div
          className="fixed w-full h-full bg-black opacity-20 rounded-3xl"
          onClick={handleLoading}
        />
        <Lottie
          animationData={loadingLottie}
          className="fixed left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2"
        />
      </>
    );

  return (
    <div className="relative flex flex-grow w-full overflow-clip">
      <div className="flex flex-col flex-1 h-screen bg-[#FAFBFD] z-10 w-full overflow-y-auto">
        <PostsPopularMainSection posts={results[0].data!.result} />
        <PostsPopularSubSection
          recentHotPosts={results[0].data!.result}
          recentSharedPosts={results[1].data!.result.posts}
          allHotPosts={results[2].data!.result}
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
