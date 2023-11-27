import { useStore } from "@/store/store";
import { PopupData } from "@/type/popup";
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
  setPopupData: (popupData: PopupData) => void;
  detectionData?:
    | ({
        index: number;
        length: number;
        entity: string;
        isDeIdentified: boolean;
      } | null)[]
    | null;
  chatLLM: "gpt-3.5-turbo" | "gpt-4";
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
  setPopupData,
  detectionData = null,
  chatLLM,
}: postPromptAskProps) => {
  const chatId = Date.now();

  const bodyData =
    detectionData != null
      ? JSON.stringify({
          sessionId: chatSessionId.length > 0 ? chatSessionId : null,
          detections: detectionData,
          question: text,
          chatModel: chatLLM,
        })
      : JSON.stringify({
          sessionId: chatSessionId.length > 0 ? chatSessionId : null,
          detections: [],
          question: text,
          chatModel: chatLLM,
        });

  const response = await fetch("https://api.seity.co.kr:2096/prompt/ask", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
    body: bodyData,
  });

  if (!response.ok) {
    setPopupData({
      type: "title-ok",
      title: "실패",
      content: "답변을 생성하는데 실패했습니다. 다시 시도해주세요.",
      handleOk: () => {},
      handleCancel: () => {},
      isVisible: true,
    });
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
      setPopupData({
        type: "title-ok",
        title: "실패",
        content: "답변을 생성하는데 실패했습니다. 다시 시도해주세요.",
        handleOk: () => {},
        handleCancel: () => {},
        isVisible: true,
      });
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
