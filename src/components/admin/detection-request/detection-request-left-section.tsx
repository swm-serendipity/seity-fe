import React, { useCallback, useEffect, useRef } from "react";
import { InfiniteData } from "@tanstack/react-query";
import { convertToDotFormat } from "@/utils/formatTime";
import Lottie from "lottie-react";
import loadingLottie from "@/components/assets/lottie/loading-animation.json";
import DetectionRequestLeftCard from "./detection-request-left-card";
import { debounce } from "lodash";

type DashboardLeftSectionProps = {
  seletedId: string | null;
  handleCard: (id: string) => void;
  data: InfiniteData<any> | undefined;
  isLoading: boolean;
  fetchNextPage: () => void;
  hasNextPage: boolean | undefined;
};

export default function DetectionRequestLeftSection({
  seletedId,
  handleCard,
  data,
  isLoading,
  fetchNextPage,
  hasNextPage,
}: DashboardLeftSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = debounce((e: Event) => {
      const target = e.target as HTMLElement;
      if (
        target.scrollHeight - target.scrollTop <= target.clientHeight + 100 &&
        hasNextPage
      ) {
        fetchNextPage();
      }
    }, 200);

    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", (e) => handleScroll(e));
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", (e) => handleScroll(e));
      }
      handleScroll.cancel();
    };
  }, [fetchNextPage, hasNextPage]);

  return (
    <div
      className="overflow-y-auto custom-scrollbar pr-3 ml-10 mt-7"
      ref={scrollRef}
    >
      {data?.pages
        .flatMap((page) => page.result.detections)
        .map((item: Detection) => {
          return (
            <DetectionRequestLeftCard
              key={item.id}
              id={item.id}
              title={item.question}
              nameColor={item.profileTextHex}
              nameBackgroundColor={item.profileBackgroundHex}
              name={item.userName}
              time={convertToDotFormat(item.createdAt)}
              isSelected={item.id === seletedId}
              handleCard={handleCard}
            />
          );
        })}
      {isLoading && <Lottie animationData={loadingLottie} />}
    </div>
  );
}
