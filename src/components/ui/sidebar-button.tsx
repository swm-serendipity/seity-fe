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
import SidebarScrapPromptSvg from "../assets/sidebar-scrap-prompt";
import SidebarSharePromptSvg from "../assets/sidebar-share-prompt";
import { SidebarButtonType } from "@/type/sidebar-button";
import SidebarDashboardSvg from "../assets/sidebar-dashboard";
import SidebarUserManagementSvg from "../assets/sidebar-user-management";
import SidebarStatsticsSvg from "../assets/sidebar-statstics";
import SidebarMessageManagementSvg from "../assets/sidebar-message-management";
import SidebarForbiddenWordManagementSvg from "../assets/sidebar-forbidden-word-management";
import SidebarSettingSvg from "../assets/sidebar-setting";

type SidebarMenuButtonProps = {
  type: SidebarButtonType;
  righticon?: string;
  text: string;
  notificationCount?: number;
  onClick: () => void;
};
export const SidebarMenuButton = ({
  type,
  righticon = "/sidebar/sidebar-open.svg",
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
      <SidebarButtonIcon type={type} color={color} />
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

type SideBarButtonProps = {
  type: SidebarButtonType;
  color: string;
};

const SidebarButtonIcon = ({ type, color }: SideBarButtonProps) => {
  if (type == "notification") {
    return <SidebarNotificationSvg color={color} className="ml-2.5" />;
  } else if (type == "popular") {
    return <SidebarPopularPromptSvg color={color} className="ml-2.5" />;
  } else if (type == "scrap") {
    return <SidebarScrapPromptSvg color={color} className="ml-2.5" />;
  } else if (type == "share") {
    return (
      <SidebarSharePromptSvg
        color={color}
        className="ml-2.5 w-[22px] h-[22px] p-0.5"
      />
    );
  } else if (type == "dashboard") {
    return <SidebarDashboardSvg color={color} className="ml-2.5" />;
  } else if (type == "user-management") {
    return (
      <SidebarUserManagementSvg
        color={color}
        className="ml-2.5 w-[22px] h-[22px]"
      />
    );
  } else if (type == "statistics") {
    return (
      <SidebarStatsticsSvg color={color} className="ml-2.5 w-[22px] h-[22px]" />
    );
  } else if (type == "forbidden-word-management") {
    return (
      <SidebarForbiddenWordManagementSvg
        color={color}
        className="ml-2.5 w-[22px] h-[22px]"
      />
    );
  } else if (type == "message-management") {
    return (
      <SidebarMessageManagementSvg
        color={color}
        className="ml-2.5 w-[22px] h-[22px]"
      />
    );
  } else if (type == "setting") {
    return (
      <SidebarSettingSvg color={color} className="ml-2.5 w-[22px] h-[22px]" />
    );
  } else {
    return <> </>;
  }
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
  const { toggleSharePopup, isAnswering, setPopupData, chatData } = useStore();

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

  const handleShareButtonClick = () => {
    if (isAnswering) {
      setPopupData({
        type: "title-ok",
        title: "공유하기",
        content: "진행중인 채팅이 있습니다. 답변을 마친 후에 공유해주세요!",
        handleCancel: () => {},
        handleOk: () => {},
        isVisible: true,
      });
      return;
    } else if (chatData.length == 0) {
      setPopupData({
        type: "title-ok",
        title: "공유하기",
        content: "데이터 로딩중입니다. 잠시후 다시 시도해주세요!",
        handleCancel: () => {},
        handleOk: () => {},
        isVisible: true,
      });
      return;
    }
    toggleSharePopup();
  };

  return (
    <div
      className={`flex w-full h-[44px] hover:bg-sidebar-button-hover rounded-md relative
    active:bg-sidebar-button-click text-body-medium items-center mt-1 cursor-pointer
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
          <SidebarShareIconButton onClick={handleShareButtonClick} />
          <SidebarDeleteIconButton onClick={handleDeleteButtonClick} />
        </div>
      )}
    </div>
  );
};
