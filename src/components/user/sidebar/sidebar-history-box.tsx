import useChatHistory from "@/hooks/useChatHistory";
import SidebarHistoryEmptyBox from "./sidebar-history-empty-box";
import SidebarHistoryFullBox from "./sidebar-history-full-box";
import SidebarHistoryHeader from "./sidebar-history-header";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function SidebarHistoryBox() {
  const {
    data,
    hasData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch,
  } = useChatHistory();

  const pathName = usePathname();
  useEffect(() => {
    if (pathName.includes("/chat/")) {
      refetch();
    }
  }, [pathName]);

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
