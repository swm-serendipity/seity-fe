import { useStore } from "@/store/store";
import { Dispatch, SetStateAction } from "react";

type postPromptAskProps = {
  text: string;
  setText: Dispatch<SetStateAction<string>>;
  addChatData: (data: Chat) => void;
  setChatData: (fn: (data: Chat[]) => Chat[]) => void;
  chatSessionId: string;
  setChatSessionId: (sessionId: string) => void;
  setIsAnswering: (isAnswering: boolean) => void;
};

const postPromptAsk = async ({
  text,
  setText,
  addChatData,
  setChatData,
  chatSessionId,
  setChatSessionId,
  setIsAnswering,
}: any) => {
  const chatId = Date.now();

  addChatData({
    id: "user-" + chatId,
    user: "user",
    message: text,
    timestamp: new Date().toISOString(),
  });

  setText("");
  setIsAnswering(true);
  addChatData({
    id: "ai-" + chatId,
    user: "ai",
    message: "",
    timestamp: new Date().toISOString(),
  });

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

        setChatData((oldChatData: Chat[]) =>
          oldChatData.map((chat: Chat) =>
            chat.id === "ai-" + chatId && chat.user === "ai"
              ? { ...chat, message: aiRes }
              : chat
          )
        );
      } else if (parsedData == "[DONE]") {
        setIsAnswering(false);
        return;
      }
    }

    return reader.read().then(processText);
  });
};

export default postPromptAsk;
