import Image from "next/image";
import SidebarPopularPromptSvg from "../assets/sidebar-popular-prompt";
import { useEffect, useState } from "react";
import { colors } from "@/styles/color-guide";
import SidebarNotificationSvg from "../assets/sidebar-notification";
import SidebarChatSvg from "../assets/sidebar-chat";
import { NotificationCount } from "./notification-count-box";
import {
  SidebarDeleteIconButton,
  SidebarShareIconButton,
} from "./icon-buttton";
import { useStore } from "@/store/store";
import deletePromptSession from "@/apis/delete-prompt-session";
import { useMutation } from "@tanstack/react-query";

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
    onClick();
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
        <NotificationCount notificationCount={notificationCount} />
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
  onDeleteButtonClick: () => void;
};
export const SidebarHistoryButton = ({
  select = false,
  text,
  onClick,
  onDeleteButtonClick,
}: SidebarHistoryButtonProps) => {
  const [color, setColor] = useState(colors.blackbg.default);
  const { toggleSharePopup } = useStore();

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
    onClick();
  };

  const handleDeleteButtonClick = () => {
    onDeleteButtonClick();
  };

  return (
    <div
      className={`flex w-full h-[44px] hover:bg-sidebar-button-hover rounded-md relative
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
          <SidebarShareIconButton onClick={toggleSharePopup} />
          <SidebarDeleteIconButton onClick={handleDeleteButtonClick} />
        </div>
      )}
    </div>
  );
};
