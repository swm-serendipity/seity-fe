// useChatHistory.js
import getPromptHistory from "@/apis/get-prompt-history";
import { useInfiniteQuery } from "@tanstack/react-query";

const useChatHistory = () => {
  const { data, isSuccess, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery(["chatHistory"], getPromptHistory, {
      getNextPageParam: (lastPage) => lastPage.nextPage ?? false,
      refetchOnWindowFocus: false,
    });

  const hasData = isSuccess && data.pages[0].result.length > 0; // 첫 페이지에 데이터가 있는지 확인

  return { data, hasData, fetchNextPage, hasNextPage, isFetchingNextPage };
};

export default useChatHistory;
