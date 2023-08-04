import { useEffect } from "react";
import { useStore } from "@/store/store";
import { useRouter } from "next/navigation";
import getSingleSharedPrompt from "@/apis/get-single-shared-prompt";

export default function useSharePromptFetchAndStore(postId: string) {
  const { setChatData, setChatSessionId } = useStore();
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getSingleSharedPrompt({ postId });
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
        router.push("/chat");
        Promise.reject(error);
      }
    };

    fetchData();
    return () => {
      setChatData(() => []);
      setChatSessionId("");
    };
  }, [postId]);
}
