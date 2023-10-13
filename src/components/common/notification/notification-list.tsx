import { useInfiniteQuery } from "@tanstack/react-query";
import NotificationListCard from "./notification-list-card";
import getCallingNotification from "@/apis/get-calling-notification";
import { useEffect, useRef, useState } from "react";
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

  const [readItems, setReadItems] = useState<Array<string>>([]);
  const [removedItems, setRemovedItems] = useState<Array<string>>([]);

  const markAsRead = (id: string) => {
    setReadItems((prev) => [...prev, id]);
  };

  // 카드를 삭제하는 함수
  const removeCard = (id: string) => {
    setRemovedItems((prev) => [...prev, id]);
  };

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
          page.result.callings
            .filter((item: Calling) => !removedItems.includes(item.callingId))
            .map((item: Calling) => (
              <NotificationListCard
                key={item.callingId}
                data={{
                  ...item,
                  read: readItems.includes(item.callingId) || item.read,
                }} // 읽은 아이템은 read를 true로 설정
                type={"calling"}
                onMarkAsRead={markAsRead}
                onRemove={removeCard}
              />
            ))
        )}
    </div>
  );
}
