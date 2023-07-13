import SideBarProfile from "./sidebar-profile";
import { Dispatch, SetStateAction, useState } from "react";
import SidebarSetting from "./sidebar-setting";
import { animated, useSpring } from "@react-spring/web";
import { useStore } from "@/store/store";
import SidebarHistoryBox from "./sidebar-history-box";
import SidebarHistoryHeader from "./sidebar-history-header";
import SidebarHeader from "./sidebar-header";
import SidebarMenu from "./sidebar-menu";

type SideBarBoxProps = {
  showSidebar: boolean;
  setShowSidebar: Dispatch<SetStateAction<boolean>>;
  setShowHiddenButton: Dispatch<SetStateAction<boolean>>;
};

export default function SideBarBox({
  showSidebar,
  setShowSidebar,
  setShowHiddenButton,
}: SideBarBoxProps) {
  const isHistory = false;
  const isNotificationOpen = useStore((state) => state.isNotificationOpen);
  const isPopupOpen = useStore((state) => state.isPopupOpen);

  const [visibility, setVisibility] = useState<"visible" | "hidden">(
    showSidebar ? "visible" : "hidden"
  );

  const sidebarStyle = useSpring({
    width: showSidebar ? "260px" : "0px",
    config: { duration: 200 },
    onStart: () => {
      if (showSidebar) {
        setVisibility("visible");
        setShowHiddenButton(false);
      }
    },
    onRest: () => {
      if (!showSidebar) {
        setVisibility("hidden");
        setShowHiddenButton(true);
      }
    },
  });

  return (
    <animated.div
      style={{ ...sidebarStyle, visibility }}
      className={`${isNotificationOpen ? "z-30" : "z-0"}`}
    >
      <div
        className={`flex flex-col bg-whitebg-default rounded-tr-4xl w-[260px] h-full
        ${isPopupOpen ? "opacity-50 pointer-events-none" : ""}`}
      >
        <SidebarHeader setShowSidebar={setShowSidebar} />
        <SideBarProfile />
        <SidebarMenu />
        <div className="w-full h-[10px] bg-sidebar-button-hr mt-5 mb-7" />
        <div className="flex flex-col h-0 flex-grow">
          <SidebarHistoryHeader isHistory={isHistory} />
          <SidebarHistoryBox isHistory={isHistory} />
          <SidebarSetting />
        </div>
      </div>
    </animated.div>
  );
}
