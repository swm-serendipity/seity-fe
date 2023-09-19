import { UserDetailSettingData } from "@/type/user-detail-setting-data";

type UserManagementUserInfoSectionProps = {
  userDetailSettingData: UserDetailSettingData;
};

export default function UserManagementUserInfoSection({
  userDetailSettingData,
}: UserManagementUserInfoSectionProps) {
  return (
    <div className="flex mt-6 rounded-lg bg-[#FAFAFA] w-[440px] h-[84px] p-5 gap-3">
      <div
        className="w-[44px] h-[44px] rounded-full flex justify-center items-center"
        style={{
          backgroundColor: userDetailSettingData.profileBackgroundHex,
          color: userDetailSettingData.profileTextHex,
        }}
      >
        {userDetailSettingData.name.slice(0, 1)}
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <div className="text-body-large font-[600]">
          {userDetailSettingData.name}
        </div>
        <div className="flex gap-4 items-center">
          <div className="text-blackbg-info">{userDetailSettingData.id}</div>
          <div className="w-0.5 h-2 bg-whitebg-disable"></div>
          <div className="text-blackbg-info">{userDetailSettingData.part}</div>
          <div className="w-0.5 h-2 bg-whitebg-disable"></div>
          <div className="text-blackbg-info">
            {userDetailSettingData.authority}
          </div>
        </div>
      </div>
    </div>
  );
}
