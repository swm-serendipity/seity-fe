import { useStore } from "@/store/store";
import { Calling } from "@/type/calling";
import { set } from "lodash";

type NotificationListCardProps = {
  data: Calling;
  type: "calling";
};

export default function NotificationListCard({
  data,
  type,
}: NotificationListCardProps) {
  const { callingData, setCallingData } = useStore();

  const handleCard = () => {
    setCallingData({
      ...callingData,
      id: data.callingId,
      isLoading: true,
    });
  };
  return (
    <div
      className={`w-full px-5 pt-4.5 pb-5 flex flex-col border-b gap-2 cursor-pointer ${
        data.read && "bg-gray-50"
      }`}
      onClick={handleCard}
    >
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div className="w-[34px] h-[34px] bg-gray-300 rounded-full" />
          <div className="text-body-large">Admin</div>
          <div className="w-[1px] h-3 bg-blackbg-info" />
          <div className="text-whitebg-info text-body-small">
            {data.senderRole}
          </div>
        </div>
        {!data.read && (
          <div className="rounded-full bg-prompt-de-identification-red-point-color w-1.5 h-1.5" />
        )}
      </div>
      <div>{type == "calling" && "소명요청"}</div>
      <div className="text-body-medium line-clamp-3">{data.question}</div>
    </div>
  );
}
