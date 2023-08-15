import useChatHistory from "@/hooks/useChatHistory";
import SidebarHistoryEmptyBox from "./sidebar-history-empty-box";
import SidebarHistoryFullBox from "./sidebar-history-full-box";
import SidebarHistoryHeader from "./sidebar-history-header";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useStore } from "@/store/store";

export default function SidebarHistoryBox() {
  const {
    data,
    hasData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch,
  } = useChatHistory();

  const { chatData, isAnswering } = useStore();

  const pathName = usePathname();
  useEffect(() => {
    if (pathName.includes("/chat/")) {
      refetch();
    }
  }, [pathName]);

  const isNewPrompt =
    pathName == "/chat" && chatData.length == 2 && !isAnswering;

  useEffect(() => {
    if (isNewPrompt) {
      setTimeout(() => {
        refetch();
      }, 1000);
    }
  }, [isNewPrompt]);

  return (
    <div className="flex flex-col h-0 flex-grow">
      <SidebarHistoryHeader isHistory={hasData} />
      <div className="mx-5 flex-col flex overflow-y-auto custom-history-scrollbar flex-1">
        {hasData ? (
          <SidebarHistoryFullBox
            data={data}
            fetchNextPage={fetchNextPage}
            hasNextPage={hasNextPage}
            isFetchingNextPage={isFetchingNextPage}
            refetch={refetch}
          />
        ) : (
          <SidebarHistoryEmptyBox />
        )}
      </div>
    </div>
  );
}
