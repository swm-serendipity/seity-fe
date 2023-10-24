import deletePromptSession from "@/apis/delete-prompt-session";
import { SidebarHistoryButton } from "@/components/ui/sidebar-button";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { useStore } from "@/store/store";
import { ChatHistoryData } from "@/type/history";
import groupByDate from "@/utils/groupByDate";
import { useMutation } from "@tanstack/react-query";
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

  const { chatSessionId, setPopupData } = useStore();

  const handlePromptButton = (item: {
    id: Key | null | undefined;
    firstQuestion: string;
  }) => {
    if (pathName == "/chat") {
      refetch();
    }
    router.push(`/chat/${item.id}`);
  };

  const { mutate } = useMutation(deletePromptSession, {
    onSuccess: (data) => {
      setTimeout(() => {
        refetch();
        router.push("/chat");
      }, 100);
    },
    onError: (error) => {
      alert(error);
    },
  });
  const handleHistoryDeleteButtonClick = () => {
    if (!chatSessionId) return;

    setPopupData({
      type: "title-ok-cancel",
      isVisible: true,
      title: "알림",
      content:
        "해당 프롬프트를 삭제하시겠습니까?\n삭제된 데이터는 복구할 수 없습니다. 삭제하시겠습니까?",
      handleCancel: () => {},
      handleOk: () => {
        mutate({ sessionId: chatSessionId });
      },
    });
  };

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
                onDeleteButtonClick={handleHistoryDeleteButtonClick}
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
