import React, { useEffect, useRef } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import DashboardLeftCard from "./dashboard-left-card";
import getDetectionDashboard from "@/apis/get-detection-dashboard";
import { convertToDotFormat } from "@/utils/formatTime";

type DashboardLeftSectionProps = {
  seletedId: string | null;
  handleCard: (id: string) => void;
};

export default function DashboardLeftSection({
  seletedId,
  handleCard,
}: DashboardLeftSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery(
    ["dashboard"],
    ({ pageParam = 0 }) => getDetectionDashboard(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        if (
          lastPage.result.detections &&
          lastPage.result.detections.length > 0
        ) {
          return allPages.length;
        }
        return false;
      },
    }
  );

  useEffect(() => {
    const handleScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      if (
        target.scrollHeight - target.scrollTop <= target.clientHeight + 50 &&
        hasNextPage
      ) {
        fetchNextPage();
      }
    };

    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [hasNextPage, fetchNextPage]);

  if (isLoading)
    return (
      <div className="min-w-[420px] ml-12 pr-3">데이터를 불러오는 중...</div>
    );

  return (
    <div
      className="overflow-y-auto custom-scrollbar pr-3 ml-12 mt-7"
      ref={scrollRef}
    >
      {data?.pages
        .flatMap((page) => page.result.detections)
        .map((item: Detection) => {
          return (
            <DashboardLeftCard
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
    </div>
  );
}
