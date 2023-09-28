import { useInfiniteQuery } from "@tanstack/react-query";
import NotificationListCard from "./notification-list-card";
import getCallingNotification from "@/apis/get-calling-notification";
import { useEffect, useRef } from "react";
import { Calling } from "@/type/calling";

export default function NotificationList() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { data, isLoading, fetchNextPage, hasNextPage, refetch } =
    useInfiniteQuery(
      ["notification-user"],
      ({ pageParam = 0 }) => getCallingNotification(pageParam),
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

  return (
    <div
      className="w-full flex-1 overflow-y-auto custom-scrollbar"
      ref={scrollRef}
    >
      {!isLoading &&
        data!.pages.map((page) =>
          page.result.callings.map((item: Calling) => (
            <NotificationListCard
              key={item.callingId}
              data={item}
              type={"calling"}
            />
          ))
        )}
    </div>
  );
}
