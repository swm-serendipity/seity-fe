import Image from "next/image";
import SidebarPopularPromptSvg from "../assets/sidebar-popular-prompt";
import { useEffect, useState } from "react";
import { colors } from "@/styles/color-guide";
import SidebarNotificationSvg from "../assets/sidebar-notification";

type SidebarMenuButtonProps = {
  type: "popular" | "notification";
  righticon?: string;
  text: string;
  notificationCount?: number;
  onClick: () => void;
};
export const SidebarMenuButton = ({
  type,
  righticon = "/sidebar-open.svg",
  text,
  notificationCount = 0,
  onClick,
}: SidebarMenuButtonProps) => {
  const [color, setColor] = useState(colors.blackbg.default);

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      setColor(colors.blackbg.default);
    };

    window.addEventListener("mouseup", handleGlobalMouseUp);

    return () => {
      window.removeEventListener("mouseup", handleGlobalMouseUp);
    };
  }, []);

  const handleMouseDown = () => {
    setColor(colors.blackbg.point);
    onClick;
  };

  return (
    <button
      className="flex w-[220px] h-[44px] bg-sidebar-button-default hover:bg-sidebar-button-hover rounded-md relative
    active:bg-sidebar-button-click text-body-medium items-center"
      onMouseDown={handleMouseDown}
    >
      {type == "popular" ? (
        <SidebarPopularPromptSvg color={color} class="ml-2.5" />
      ) : (
        <SidebarNotificationSvg color={color} class="ml-2.5" />
      )}
      <p className="ml-1.5" style={{ color: color }}>
        {text}
      </p>
      {notificationCount ? (
        <div className="bg-sidebar-button-alert w-[30px] h-[18px] ml-1 flex justify-center items-end rounded-3xl text-blackbg-default text-body-medium">
          {notificationCount > 99 ? "99+" : notificationCount}
        </div>
      ) : (
        <></>
      )}
      <Image
        src={righticon}
        alt={righticon}
        width={18}
        height={18}
        className="absolute right-3"
      />
    </button>
  );
};
