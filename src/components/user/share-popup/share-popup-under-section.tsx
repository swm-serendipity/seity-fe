import { useStore } from "@/store/store";
import ShareButtons from "./share-popup-buttons";
import SharePopupMentionInput from "./share-popup-mention-input";
import ShareTitleSection from "./share-popup-title-section";
import { useState } from "react";
import { UseMutateFunction } from "@tanstack/react-query";

type SharePopupUnderSectionProps = {
  mutate: UseMutateFunction<any, any, any, unknown>;
};

export default function SharePopupUnderSection({
  mutate,
}: SharePopupUnderSectionProps) {
  const { toggleSharePopup, setPopupData, chatSessionId } = useStore();
  const [titleText, setTitleText] = useState("");
  const [mentionUsers, setMentionUsers] = useState<
    {
      id: string;
      name: string;
    }[]
  >([]);

  const handleButton = () => {
    if (chatSessionId === null) return;
    mutate({
      promptSessionId: chatSessionId,
      title: titleText,
      mentionMemberList: mentionUsers.map((item) => {
        return { memberId: item.id };
      }),
    });
  };
  return (
    <>
      <ShareTitleSection title={titleText} setTitle={setTitleText} />
      <SharePopupMentionInput
        mentionUsers={mentionUsers}
        setMentionUsers={setMentionUsers}
      />
      <ShareButtons handleButton={handleButton} />
    </>
  );
}
