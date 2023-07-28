import { useStore } from "@/store/store";
import { Dispatch, SetStateAction } from "react";

type postPromptAskProps = {
  text: string;
  addChatData: (data: Chat) => void;
  chatSessionId: string;
  setChatSessionId: (sessionId: string) => void;
  setIsAnswering: (isAnswering: boolean) => void;
  setAnsweringData: (data: Chat) => void;
};

const postPromptAsk = async ({
  text,
  addChatData,
  chatSessionId,
  setChatSessionId,
  setIsAnswering,
  setAnsweringData,
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
    setIsAnswering(false);
    return;
  }

  let aiRes = "";
  let buffer = "";

  const reader = response.body!.getReader();
  const decoder = new TextDecoder();

  reader.read().then(function processText({ done, value }): any {
    if (done) {
      console.log("Stream complete");
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
