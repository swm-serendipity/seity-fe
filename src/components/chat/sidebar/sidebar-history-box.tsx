import useChatHistory from "@/hooks/useChatHistory";
import SidebarHistoryEmptyBox from "./sidebar-history-empty-box";
import SidebarHistoryFullBox from "./sidebar-history-full-box";
import SidebarHistoryHeader from "./sidebar-history-header";

export default function SidebarHistoryBox() {
  const isHistory = true;
  const { data, hasData, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useChatHistory();

  return (
    <div className="flex flex-col h-0 flex-grow">
      <SidebarHistoryHeader isHistory={isHistory} />

      <div className="mx-5 flex-col flex overflow-y-auto custom-history-scrollbar flex-1">
        {hasData ? (
          <SidebarHistoryFullBox
            data={data}
            fetchNextPage={fetchNextPage}
            hasNextPage={hasNextPage}
            isFetchingNextPage={isFetchingNextPage}
          />
        ) : (
          <SidebarHistoryEmptyBox />
        )}
      </div>
    </div>
  );
}
