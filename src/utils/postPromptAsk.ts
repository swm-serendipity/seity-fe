import { useStore } from "@/store/store";
import { set } from "lodash";
import { Dispatch, SetStateAction } from "react";

type postPromptAskProps = {
  text: string;
  addChatData: (data: Chat) => void;
  chatSessionId: string;
  setChatSessionId: (sessionId: string) => void;
  setIsAnswering: (isAnswering: boolean) => void;
  setAnsweringData: (data: Chat) => void;
  isAnsweringPersist: boolean;
  setIsAnsweringPersist: (isAnsweringPersist: boolean) => void;
};

const postPromptAsk = async ({
  text,
  addChatData,
  chatSessionId,
  setChatSessionId,
  setIsAnswering,
  setAnsweringData,
  isAnsweringPersist,
  setIsAnsweringPersist,
}: postPromptAskProps) => {
  const chatId = Date.now();
  const response = await fetch("https://api.seity.co.kr/prompt/ask", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
    body: JSON.stringify({
      sessionId: chatSessionId ? chatSessionId : undefined,
      question: text,
    }),
  });

  if (!response.ok) {
    alert("답변을 생성하는데 실패했습니다. 다시 시도해주세요.");
    setIsAnswering(false);
    return;
  }

  let aiRes = "";
  let buffer = "";

  const reader = response.body!.getReader();
  const decoder = new TextDecoder();
  if (isAnsweringPersist) {
    setIsAnsweringPersist(false);
  }
  reader.read().then(function processText({ done, value }): any {
    if (done) {
      alert("답변을 생성하는데 실패했습니다. 다시 시도해주세요.");
      setIsAnswering(false);
      return;
    }

    buffer += decoder.decode(value);
    while (true) {
      const boundary = buffer.indexOf("\n\n");
      if (boundary === -1) break;

      const data = buffer.slice(0, boundary);
      buffer = buffer.slice(boundary + 2);
      const parsedData = JSON.parse(data.slice(5));

      // 계속 답변이 필요
      if (parsedData.finishReason === "length") {
        setIsAnsweringPersist(true);
      }

      if (parsedData.sessionId && !chatSessionId) {
        setChatSessionId(parsedData.sessionId);
      }
      if (parsedData.answer) {
        aiRes += parsedData.answer;

        setAnsweringData({
          id: "ai",
          user: "ai",
          message: aiRes,
          timestamp: new Date().toISOString(),
        });
      } else if (parsedData == "[DONE]") {
        setIsAnswering(false);
        addChatData({
          id: "ai-" + chatId,
          user: "ai",
          message: aiRes,
          timestamp: new Date().toISOString(),
        });
        setAnsweringData({
          id: "",
          user: "",
          message: "",
          timestamp: "",
        });
        return;
      }
    }

    return reader.read().then(processText);
  });
};

export default postPromptAsk;
