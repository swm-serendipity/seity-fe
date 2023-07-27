import { SidebarHistoryButton } from "@/components/ui/sidebar-button";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { useStore } from "@/store/store";
import { ChatHistoryData } from "@/type/history";
import groupByDate from "@/utils/groupByDate";
import { usePathname, useRouter } from "next/navigation";
import { Key, useEffect } from "react";

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

  const { chatData, isAnswering, chatSessionId } = useStore();

  const handlePromptButton = (item: {
    id: Key | null | undefined;
    firstQuestion: string;
  }) => {
    if (pathName == "/chat") {
      refetch();
    }
    router.push(`/chat/${item.id}`);
  };

  const isNewPrompt =
    pathName == "/chat" && chatData.length == 2 && !isAnswering;

  useEffect(() => {
    if (isNewPrompt) {
      setTimeout(() => {
        refetch();
      }, 1000);
    }
  }, [isNewPrompt]);

  const allData = data?.pages.flatMap((page) => page.result) || [];

  const groupedData = groupByDate(allData);

  return (
    <div className="flex-1 overflow-auto custom-history-scrollbar">
      {groupedData.map(({ date, items }) => (
        <div key={date} className="mt-6">
          <div className="text-blackbg-disable text-body-small">{date}</div>
          <div>
            {items.map((item: { id: Key; firstQuestion: string }) => (
              <SidebarHistoryButton
                key={item.id}
                text={item.firstQuestion}
                onClick={() => handlePromptButton(item)}
                select={
                  pathName == `/chat/${item.id}` || item.id == chatSessionId
                }
              />
            ))}
          </div>
        </div>
      ))}
      <div ref={observerRef} style={{ height: "1px" }}></div>
    </div>
  );
}
