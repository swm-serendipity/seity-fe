import Lottie from "lottie-react";
import loadingLottie from "@/components/assets/lottie/loading-animation.json";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import MessageManagementCallingRequestCard from "./message-management-calling-request-card";
import { AdminCalling } from "@/type/admin-calling";
import getCallingAdminHistory from "@/apis/get-calling-admin-history";
import { debounce } from "lodash";
export default function MessageManagementCallingRequest() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { data, isLoading, fetchNextPage, hasNextPage, refetch } =
    useInfiniteQuery(
      ["admin-calling-request"],
      ({ pageParam = 0 }) => getCallingAdminHistory(pageParam),
      {
        getNextPageParam: (lastPage, allPages) => {
          if (lastPage.result.currentPageNumber >= lastPage.result.totalPages) {
            return undefined;
          }
          return lastPage.result.currentPageNumber + 1;
        },
      }
    );

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
    <div className="bg-white notice-card w-[400px] h-[800px] rounded-xl flex flex-col">
      <div className=" px-7.5 pt-6 pb-5.5 border-b border-[#E2E2E2]">
        <div className="text-h4 font-h4">소명 요청</div>
      </div>
      <div className="flex-1 flex flex-col overflow-y-auto" ref={scrollRef}>
        {data! &&
          data!.pages.map((page) =>
            page.result.callings.map((item: AdminCalling) => {
              return (
                <MessageManagementCallingRequestCard
                  key={item.callingId}
                  item={item}
                />
              );
            })
          )}
        {isLoading && (
          <div className="flex justify-center items-center rounded-b-xl">
            <Lottie animationData={loadingLottie} />
          </div>
        )}
      </div>
    </div>
  );
}
