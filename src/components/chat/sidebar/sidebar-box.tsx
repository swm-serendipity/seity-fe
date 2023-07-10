import Image from "next/image";
import { FoldIconButton } from "../../ui/icon-button";
import SideBarProfile from "./sidebar-profile";
import { SidebarMenuButton } from "../../ui/sidebar-button";
import { Dispatch, SetStateAction } from "react";
import SidebarHistory from "./sidebar-history";
import SidebarSetting from "./sidebar-setting";
import { animated, useSpring } from "@react-spring/web";

type SideBarBoxProps = {
  showSidebar: boolean;
  setShowSidebar: Dispatch<SetStateAction<boolean>>;
};

export default function SideBarBox({
  showSidebar,
  setShowSidebar,
}: SideBarBoxProps) {
  const sidebarStyle = useSpring({
    width: showSidebar ? "260px" : "0px",
    config: { duration: 300 },
  });
  const handleFoldButton = () => {
    setShowSidebar(false);
  };

  return (
    <animated.div
      style={sidebarStyle}
      className={`flex flex-col bg-whitebg-default min-h-full h-full rounded-tr-4xl transform transition-transform duration-300 ease-in-out z-50 overflow-hidden ${
        showSidebar ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center ml-7 mt-7 mr-5 gap-18">
        <Image
          width={95}
          height={24}
          src="/logo.svg"
          alt="seity 로고"
          className="object-cover"
        />
        <FoldIconButton color="black" onClick={handleFoldButton} />
      </div>
      <div className="ml-5 mt-16">
        <SideBarProfile />
      </div>
      <div className="mt-7 flex flex-col items-center gap-2">
        <SidebarMenuButton
          text="인기 프롬프트"
          onClick={() => {}}
          type="popular"
        />
        <SidebarMenuButton
          text="알림"
          onClick={() => {}}
          type="notification"
          notificationCount={21}
        />
      </div>
      <div className="w-full h-[10px] bg-sidebar-button-hr mt-5 mb-7" />
      <div className="flex flex-col h-0 flex-grow">
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <SidebarHistory />
        </div>
        <div className="justify-end">
          <SidebarSetting />
        </div>
      </div>
    </animated.div>
  );
}
