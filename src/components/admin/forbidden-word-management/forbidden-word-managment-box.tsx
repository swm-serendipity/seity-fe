import { useStore } from "@/store/store";
import { Fragment } from "react";
import NotificationBox from "@/components/common/notification/notification-box";
import NotificationBackground from "@/components/common/notification/notification-background";
import Popup from "@/components/ui/popup/popup";
import ForbiddenWordManagementSection from "./forbidden-word-management-section";

export default function ForbiddenWordManagementBox() {
  const { isNotificationOpen, popupData } = useStore();

  return (
    <div className="relative flex w-full">
      <ForbiddenWordManagementSection />
      {popupData.isVisible && <Popup />}
      {isNotificationOpen && (
        <Fragment>
          <NotificationBackground />
          <NotificationBox />
        </Fragment>
      )}
    </div>
  );
}
