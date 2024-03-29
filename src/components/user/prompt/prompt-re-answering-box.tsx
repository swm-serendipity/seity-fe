import { ColoredButton } from "@/components/ui/color-button";
import { useStore } from "@/store/store";

export default function PromptReAnsweringBox() {
  const {
    isAnsweringPersist,
    setIsAnsweringPersist,
    chatSessionId,
    setAnsweringData,
    addChatData,
    setChatData,
    setPopupData,
    setIsAnswering,
  } = useStore();

  const handleReAnswering = async () => {
    let aiRes = "";
    let buffer = "";
    setChatData((prevChatData) => {
      const newChatData = [...prevChatData];
      aiRes = newChatData.pop()!.message;
      return newChatData;
    });
    setIsAnsweringPersist(false);
    setIsAnswering(true);
    setAnsweringData({
      id: "ai",
      user: "ai",
      message: aiRes,
      timestamp: new Date().toISOString(),
    });
    if (!chatSessionId) {
      return;
    }

    const response = await fetch(
      `https://api.seity.co.kr:2096/prompt/ask/continue?sessionId=${chatSessionId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );

    if (!response.ok) {
      setPopupData({
        type: "title-ok",
        title: "실패",
        content: "답변을 이어 생성하는데 실패했습니다. 다시 시도해주세요.",
        handleOk: () => {},
        handleCancel: () => {},
        isVisible: true,
      });
      return;
    }

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
          content: "답변을 이어 생성하는데 실패했습니다. 다시 시도해주세요.",
          handleOk: () => {},
          handleCancel: () => {},
          isVisible: true,
        });
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
        if (parsedData.answer) {
          aiRes += parsedData.answer;

          setAnsweringData({
            id: "ai",
            user: "ai",
            message: aiRes,
            timestamp: new Date().toISOString(),
          });
        } else if (parsedData == "[DONE]") {
          addChatData({
            id: "ai-" + new Date().toISOString(),
            user: "ai",
            message: aiRes,
            timestamp: new Date().toISOString(),
          });
          setIsAnswering(false);
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

  return (
    <div className="absolute right-0 -top-14">
      {isAnsweringPersist && (
        <ColoredButton
          buttonText="답변 이어하기"
          color="point"
          textColor="black"
          width={120}
          height={40}
          onClick={handleReAnswering}
        />
      )}
    </div>
  );
}
