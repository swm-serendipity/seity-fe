import React, { useEffect, useRef } from "react";
import { InfiniteData } from "@tanstack/react-query";
import DashboardLeftCard from "./dashboard-left-card";
import { convertToDotFormat } from "@/utils/formatTime";

type DashboardLeftSectionProps = {
  seletedId: string | null;
  handleCard: (id: string) => void;
  data: InfiniteData<any> | undefined;
  isLoading: boolean;
  fetchNextPage: () => void;
  hasNextPage: boolean | undefined;
};

export default function DashboardLeftSection({
  seletedId,
  handleCard,
  data,
  isLoading,
  fetchNextPage,
  hasNextPage,
}: DashboardLeftSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

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
