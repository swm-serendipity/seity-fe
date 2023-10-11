import { useStore } from "@/store/store";
import Image from "next/image";

export default function SidebarSetting() {
  const { setPopupData } = useStore();

  const handleChatSettingButton = () => {
    setPopupData({
      type: "title-ok",
      isVisible: true,
      title: "알림",
      content: "챗 설정이 비활성화 되어있어요.",
      handleCancel: () => {},
      handleOk: () => {},
    });
  };
  return (
    <div className="border-t border-sidebar-button-divider mx-5 flex h-[54px] bg-whitebg-default">
      <button
        className="flex items-center text-body-medium text-blackbg-default w-full h-full"
        onClick={handleChatSettingButton}
      >
        <Image
          src="/sidebar/sidebar-setting.svg"
          width={16}
          height={16}
          alt="설정"
        />
        <div className="ml-2">챗 설정</div>
      </button>
    </div>
  );
}
