import { useStore } from "@/store/store";
import Image from "next/image";
import UserManagementPopupHeader from "./user-management-popup-header";
import UserManagementUserInfoSection from "./user-management-user-info-section";
import UserManagementInfoEditSection from "./user-management-info-edit-section";
import UserManagementAuthInfoEditSection from "./user-management-auth-info-edit-seciton";
import { ColoredButton } from "@/components/ui/color-button";

export default function UserManagementPopup() {
  const { userDetailSettingData, setUserDetailSettingData } = useStore();

  const handleOkButton = () => {
    setUserDetailSettingData({
      id: "",
      name: "",
      email: "",
      part: "",
      authority: "",
      profileBackgroundHex: "",
      profileTextHex: "",
      isVisible: false,
    });
  };

  const handleBox = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-30 overflow-auto"
      onClick={handleOkButton}
    >
      <div
        className="h-[700px] w-[500px] bg-white rounded-lg p-7.5"
        onClick={handleBox}
      >
        <UserManagementPopupHeader handleOutsideClick={handleOkButton} />
        <UserManagementUserInfoSection
          userDetailSettingData={userDetailSettingData}
        />
        <UserManagementInfoEditSection />
        <UserManagementAuthInfoEditSection />
        <div className="flex justify-between mt-4">
          <ColoredButton
            width={212}
            height={52}
            buttonText="계정삭제"
            color="alert"
            textColor="alert"
            onClick={handleOkButton}
          />
          <ColoredButton
            width={212}
            height={52}
            buttonText="설정완료"
            color="default"
            textColor="white"
            onClick={handleOkButton}
          />
        </div>
      </div>
    </div>
  );
}
