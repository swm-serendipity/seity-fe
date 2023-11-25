import PurpleWhiteCheck from "@/components/assets/purple-white-check";
import { useStore } from "@/store/store";
import { AdminCalling } from "@/type/admin-calling";
import formatDate from "@/utils/formatDate";

type MessageManagementCallingRequestCardProps = {
  item: AdminCalling;
};

export default function MessageManagementCallingRequestCard({
  item,
}: MessageManagementCallingRequestCardProps) {
  const { setSelectedCallingId } = useStore();
  return (
    <div
      className="w-full h-20 px-7.5 py-4.5 border-b border-[#E2E2E2] cursor-pointer"
      onClick={() => {
        setSelectedCallingId(item.callingId);
      }}
    >
      <div className="flex gap-3 items-center">
        <div
          className="w-9 h-9 rounded-full flex justify-center items-center"
          style={{
            backgroundColor: item.userProfileBackgroundHex,
            color: item.userProfileTextHex,
          }}
        >
          {item.userName[0]}
        </div>
        <div className="flex flex-col gap-1.5 flex-1">
          <div className="flex justify-between">
            <div className="text-body-medium font-bold">{item.userName}</div>
            <div className="text-body-small text-whitebg-info">
              {formatDate(item.lastModifiedAt)}
            </div>
          </div>
          <div className="flex justify-between">
            <div className="line-clamp-1 text-body-medium">
              ChatGPT 사용 중{" "}
              {item.detectionDivision[0] == "PRIVACY" ? "개인정보" : "민감정보"}{" "}
              입력 건 소명 요청
            </div>
            {item.resolved && <PurpleWhiteCheck />}
          </div>
        </div>
      </div>
    </div>
  );
}
