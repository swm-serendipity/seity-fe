import { useInfiniteQuery } from "@tanstack/react-query";
import NotificationListCard from "./notification-list-card";
import getCallingNotification from "@/apis/get-calling-notification";
import { useEffect, useRef, useState } from "react";
import { Calling } from "@/type/calling";
import { debounce } from "lodash";

export default function NotificationList() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { data, isLoading, fetchNextPage, hasNextPage, refetch, isError } =
    useInfiniteQuery(
      ["notification-user"],
      ({ pageParam = 0 }) => getCallingNotification(pageParam),
      {
        getNextPageParam: (lastPage) => {
          if (lastPage.result.currentPageNumber >= lastPage.result.totalPages) {
            return undefined;
          }
          return lastPage.result.currentPageNumber + 1;
        },
      }
    );

  const [readItems, setReadItems] = useState<Array<string>>([]);
  const [removedItems, setRemovedItems] = useState<Array<string>>([]);

  const markAsRead = (id: string) => {
    setReadItems((prev) => [...prev, id]);
  };

  const removeCard = (id: string) => {
    setRemovedItems((prev) => [...prev, id]);
  };

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

  if (isError) {
    return <div className="mx-4 mt-2">에러가 발생했습니다.</div>;
  }

  return (
    <div
      className="w-full flex-1 overflow-y-auto custom-scrollbar"
      ref={scrollRef}
    >
      {!isLoading &&
        data!.pages.map((page) => {
          const callings = page.result.callings || [];
          return callings
            .filter((item: Calling) => !removedItems.includes(item.callingId))
            .map((item: Calling) => (
              <NotificationListCard
                key={item.callingId}
                data={{
                  ...item,
                  read: readItems.includes(item.callingId) || item.read,
                }}
                type={"calling"}
                onMarkAsRead={markAsRead}
                onRemove={removeCard}
              />
            ));
        })}
    </div>
  );
}
