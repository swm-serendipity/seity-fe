import getNotificationCount from "@/apis/get-notification-count";
import { NotificationCount } from "@/components/ui/notification-count-box";
import { useQuery } from "@tanstack/react-query";

export default function NotificationHeader() {
  const { data } = useQuery(["notification-count"], getNotificationCount);

  return (
    <div className="flex mt-14 justify-between px-5 mb-6 flex-grow-0">
      <div className="flex items-center">
        <div className="font-h3 text-h3 text-whitebg-default flex">알림</div>
        <NotificationCount notificationCount={data?.result.count} />
      </div>
      {/* <button className="pr-0.5 font-body-medium text-body-medium text-whitebg-serve underline">
        모든 알림 읽음처리
      </button> */}
    </div>
  );
}
