// useChatHistory.js
import getPromptHistory from "@/apis/get-prompt-history";
import { useInfiniteQuery } from "@tanstack/react-query";

const useChatHistory = () => {
  const {
    data,
    isSuccess,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch,
  } = useInfiniteQuery(["chat-history"], getPromptHistory, {
    getNextPageParam: (lastPage) => {
      if (lastPage.result.currentPageNumber === lastPage.result.totalPages) {
        return false;
      }
      return lastPage.result.currentPageNumber + 1;
    },
    refetchOnWindowFocus: false,
  });
  const hasData = isSuccess && data.pages[0].result.prompts.length > 0;

  return {
    data,
    hasData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch,
  };
};

export default useChatHistory;
