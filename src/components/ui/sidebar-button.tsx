import Image from "next/image";
import SidebarPopularPromptSvg from "../assets/sidebar-popular-prompt";
import { useEffect, useState } from "react";
import { colors } from "@/styles/color-guide";
import SidebarNotificationSvg from "../assets/sidebar-notification";
import SidebarChatSvg from "../assets/sidebar-chat";

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
        <SidebarPopularPromptSvg color={color} className="ml-2.5" />
      ) : (
        <SidebarNotificationSvg color={color} className="ml-2.5" />
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

type SidebarHistoryButtonProps = {
  select?: boolean;
  text: string;
  onClick: () => void;
};
export const SidebarHistoryButton = ({
  select = false,
  text,
  onClick,
}: SidebarHistoryButtonProps) => {
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
      className={`flex w-[220px] h-[44px] hover:bg-sidebar-button-hover rounded-md relative
    active:bg-sidebar-button-click text-body-medium items-center mt-1
    ${select ? "bg-sidebar-button-hover" : "bg-sidebar-button-default"}`}
      onMouseDown={handleMouseDown}
    >
      <SidebarChatSvg color={color} className="ml-2.5" />
      <p
        className="flex-1 ml-1.5 overflow-hidden whitespace-nowrap overflow-ellipsis text-body-medium text-left"
        style={{ color: color }}
      >
        {text}
      </p>
      {select && (
        <div className="flex">
          <Image
            src="/sidebar-share.svg"
            alt="프롬프트 공유"
            width={18}
            height={18}
            className="mr-2"
          />
          <Image
            src="/sidebar-delete.svg"
            alt="프롬프트 삭젠"
            width={18}
            height={18}
            className="mr-3"
          />
        </div>
      )}
    </button>
  );
};
