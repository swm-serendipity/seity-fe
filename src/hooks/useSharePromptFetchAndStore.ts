import { useEffect } from "react";
import { useStore } from "@/store/store";
import { useRouter } from "next/navigation";
import getSingleSharedPrompt from "@/apis/get-single-shared-prompt";

export default function useSharePromptFetchAndStore(postId: string) {
  const { setChatData, setChatSessionId, setPopupData, setSharePostData } =
    useStore();
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getSingleSharedPrompt({ postId });
        setSharePostData({
          title: response.result.title,
          llm: response.result.llm,
          id: response.result.id,
          createdAt: response.result.createdAt,
          lastModifiedAt: response.result.lastModifiedAt,
          like: response.result.like,
          likeNumber: response.result.likeNumber,
          memberName: response.result.memberName,
          memberPart: response.result.memberPart,
          memberProfileBackgroundHex:
            response.result.memberProfileBackgroundHex,
          memberProfileTextHex: response.result.memberProfileTextHex,
          views: response.result.views,
        });
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
        setPopupData({
          type: "title-ok",
          isVisible: true,
          title: "에러",
          content: "해당 게시물이 존재하지 않습니다.",
          handleCancel: () => {},
          handleOk: () => {
            router.push("/chat");
          },
        });
        Promise.reject(error);
      }
    };

    fetchData();
    return () => {
      setChatData(() => []);
      setChatSessionId("");
      setSharePostData({
        title: "",
        llm: "",
        id: "",
        createdAt: "",
        lastModifiedAt: "",
        like: false,
        likeNumber: 0,
        memberName: "",
        memberPart: "",
        memberProfileBackgroundHex: "",
        memberProfileTextHex: "",
        views: 0,
      });
    };
  }, [postId]);
}
