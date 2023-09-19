import { useStore } from "@/store/store";
import { Fragment } from "react";
import NotificationBox from "@/components/common/notification/notification-box";
import NotificationBackground from "@/components/common/notification/notification-background";
import Popup from "@/components/ui/popup/popup";
import UserManagementSection from "./user-management-section";
import UserManagementPopup from "./user-management-popup/user-management-popup";

export default function UserManagementBox() {
  const { isNotificationOpen, popupData, userDetailSettingData } = useStore();
  return (
    <div className="relative flex w-full">
      <UserManagementSection />
      {popupData.isVisible && <Popup />}
      {userDetailSettingData.isVisible && <UserManagementPopup />}
      {isNotificationOpen && (
        <Fragment>
          <NotificationBackground />
          <NotificationBox />
        </Fragment>
      )}
    </div>
  );
}
