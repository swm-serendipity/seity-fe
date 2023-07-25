import { SidebarHistoryButton } from "@/components/ui/sidebar-button";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { useStore } from "@/store/store";
import { ChatHistoryData, PromptHistoryPage } from "@/type/history";
import { formatDistanceToNow, parseISO } from "date-fns";
import { ko } from "date-fns/locale";
import { usePathname, useRouter } from "next/navigation";
import { Key } from "react";

type SidebarHistoryFullBoxProps = {
  data: ChatHistoryData | undefined;
  isFetchingNextPage: boolean;
  hasNextPage: boolean | undefined;
  fetchNextPage: () => void;
  refetch: () => void;
};

export default function SidebarHistoryFullBox({
  data,
  isFetchingNextPage,
  hasNextPage,
  fetchNextPage,
  refetch,
}: SidebarHistoryFullBoxProps) {
  const router = useRouter();
  const pathName = usePathname();
  const observerRef = useIntersectionObserver(
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage
  );

  const { chatData } = useStore();

  const groupByDate = (results: PromptHistoryPage["result"]) => {
    const groups = results.reduce(
      (groups: { [x: string]: any[] }, item: { lastModifiedAt: string }) => {
        const date = item.lastModifiedAt.split(" ")[0];
        if (!groups[date]) {
          groups[date] = [];
        }
        groups[date].push(item);
        return groups;
      },
      {}
    );

    const groupArrays = Object.keys(groups).map((date) => {
      return {
        date,
        items: groups[date],
      };
    });

    return groupArrays;
  };

  const handlePromptButton = (item: {
    id: Key | null | undefined;
    firstQuestion: string;
  }) => {
    if (pathName == "/chat") {
      refetch();
    }
    router.push(`/chat/${item.id}`);
  };

  const isNewPrompt = pathName == "/chat" && chatData.length > 0;

  return (
    <div className="flex-1 overflow-auto custom-history-scrollbar">
      {data &&
        data.pages.map((group, i: number) => (
          <div key={i} className="flex-1">
            {isNewPrompt && (
              <>
                <div className="text-blackbg-disable text-body-small">지금</div>
                <SidebarHistoryButton
                  text={chatData[0].message}
                  onClick={() => {}}
                  select
                />
              </>
            )}
            {groupByDate(group.result).map(({ date, items }) => (
              <div key={date} className="mt-6">
                <div className="text-blackbg-disable text-body-small">
                  {formatDistanceToNow(parseISO(date), {
                    addSuffix: true,
                    locale: ko,
                  })}
                </div>
                <div>
                  {items.map(
                    (item: {
                      id: Key | null | undefined;
                      firstQuestion: string;
                    }) => (
                      <SidebarHistoryButton
                        key={item.id}
                        text={item.firstQuestion}
                        onClick={() => handlePromptButton(item)}
                        select={pathName == `/chat/${item.id}`}
                      />
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
      <div ref={observerRef} style={{ height: "1px" }}></div>
    </div>
  );
}
