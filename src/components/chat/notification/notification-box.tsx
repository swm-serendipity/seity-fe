import NotificationHeader from "./notification-header";
import NotificationList from "./notification-list";
import NotificationMenus from "./notification-menus";

export default function NotificationBox() {
  return (
    <div
      className={`bg-blackbg-default z-20 absolute h-full rounded-tr-4xl
        left-0 w-[380px]
    `}
    >
      <div className="relative flex flex-col h-full">
        <NotificationHeader />
        <NotificationMenus />
        <NotificationList />
      </div>
    </div>
  );
}
