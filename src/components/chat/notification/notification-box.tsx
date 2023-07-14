import NotificationHeader from "./notification-header";
import NotificationList from "./notification-list";
import NotificationMenus from "./notification-menus";

type NotificationBoxProps = {
  showSidebar: boolean;
};

export default function NotificationBox({ showSidebar }: NotificationBoxProps) {
  return (
    <div
      className={`bg-blackbg-default z-20 absolute h-full rounded-tr-4xl ${
        showSidebar ? "left-[220px] w-[420px] pl-10" : "left-0 w-[380px]"
      }`}
    >
      <div className="relative flex flex-col h-full">
        <NotificationHeader />
        <NotificationMenus />
        <NotificationList />
      </div>
    </div>
  );
}
