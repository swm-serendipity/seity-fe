import { useEffect } from "react";
import getPromptData from "@/apis/get-prompt-data";
import { useStore } from "@/store/store";

export default function useFetchAndStoreChat(sessionId: string) {
  const { setChatData, setChatSessionId } = useStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPromptData({ sessionId });
        const chatData = response.result.qnaList.flatMap(
          (qna: { question: any; answer: any }, index: number) => [
            {
              id: `${response.result.id}-q-${index}`,
              user: "user",
              message: qna.question,
              timestamp: response.result.lastModifiedAt,
            },
            {
              id: `${response.result.id}-a-${index}`,
              user: "ai",
              message: qna.answer,
              timestamp: response.result.lastModifiedAt,
            },
          ]
        );
        setChatSessionId(response.result.id);
        setChatData(() => chatData);
      } catch (error) {
        Promise.reject(error);
      }
    };

    fetchData();
    return () => {
      setChatData(() => []);
      setChatSessionId("");
    };
  }, [sessionId]);
}
