import { useStore } from "@/store/store";
import MessageManagementChatSection from "./message-management-chat-section";

export default function MessageManagementRightSection() {
  const { selectedCallingId } = useStore();
  return (
    <div className="bg-white notice-card w-[580px] h-[870px] rounded-xl">
      {selectedCallingId.length > 0 ? (
        <MessageManagementChatSection selectedCallingId={selectedCallingId} />
      ) : (
        <div className="w-full h-full flex justify-center items-center text-whitebg-info text-body-medium">
          공지사항 또는 소명 요청을 클릭해주세요.
        </div>
      )}
    </div>
  );
}
