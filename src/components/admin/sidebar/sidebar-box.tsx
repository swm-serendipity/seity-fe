import SideBarProfile from "./sidebar-profile";
import { Dispatch, SetStateAction, useState } from "react";
import { animated, useSpring } from "@react-spring/web";
import { useStore } from "@/store/store";
import SidebarHeader from "./sidebar-header";
import SidebarMenu from "./sidebar-menu";
import SidebarSetting from "@/components/user/sidebar/sidebar-setting";

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
  const { isNotificationOpen, isDeIdentificationPopupOpen } = useStore();

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
        ${
          isDeIdentificationPopupOpen ? "opacity-50 pointer-events-none" : ""
        } overflow-y-auto`}
      >
        <SidebarHeader setShowSidebar={setShowSidebar} />
        <SideBarProfile />
        <SidebarMenu />
        <SidebarSetting />
      </div>
    </animated.div>
  );
}
