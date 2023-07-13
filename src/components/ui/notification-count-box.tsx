type NotificationCountProps = {
  notificationCount: number;
};

export const NotificationCount = ({
  notificationCount,
}: NotificationCountProps) => {
  return (
    <div className="bg-sidebar-button-alert w-[30px] h-[18px] ml-1 flex justify-center items-end rounded-3xl text-blackbg-default text-body-medium">
      {notificationCount > 99 ? "99+" : notificationCount}
    </div>
  );
};
