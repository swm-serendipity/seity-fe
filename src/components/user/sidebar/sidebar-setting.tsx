import Image from "next/image";

export default function SidebarSetting() {
  return (
    <div
      className="border-t border-sidebar-button-divider mx-5 flex h-[54px]"
      onClick={() => {}}
    >
      <button className="flex items-center text-body-medium text-blackbg-default w-full h-full">
        <Image src="/sidebar-setting.svg" width={16} height={16} alt="설정" />
        <div className="ml-2">챗 설정</div>
      </button>
    </div>
  );
}
