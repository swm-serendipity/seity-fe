import SidebarNotificationSvg from "@/components/assets/sidebar-notification";
import SidebarPopularPromptSvg from "@/components/assets/sidebar-popular-prompt";
import { colors } from "@/styles/color-guide";

import Image from "next/image";

type FoldButtonProps = {
  color: "black" | "white";
  onClick: () => void;
};

export const FoldIconButton = ({ color, onClick }: FoldButtonProps) => {
  return (
    <button
      className={`${
        color == "black" ? "bg-whitebg-default" : "bg-blackbg-default"
      } w-[36px] h-[36px] justify-center items-center border rounded-md hidden 2md:flex`}
      onClick={onClick}
      style={{
        borderColor: color == "black" ? "#6F6F6F" : "#EBEBEb",
      }}
    >
      <Image
        src={
          color == "black"
            ? "/sidebar/sidebar-fold-white.svg"
            : "/sidebar/sidebar-fold-black.svg"
        }
        width={16}
        height={16}
        alt="접기"
      />
    </button>
  );
};

type NotificationButtonProps = {
  isAlert: boolean;
  onClick: () => void;
};

export const NotificationIconButton = ({
  isAlert,
  onClick,
}: NotificationButtonProps) => {
  return (
    <button
      className="w-[22px] h-[22px] ml-3.5 bg-white rounded-full"
      onClick={onClick}
    >
      <SidebarNotificationSvg isAlert={isAlert} color={colors.whitebg.info} />
    </button>
  );
};

type PopularPromptButtonProps = {
  onClick: () => void;
};

export const PopularPromptButton = ({ onClick }: PopularPromptButtonProps) => {
  return (
    <button
      className="w-[22px] h-[22px] ml-2.5 bg-white rounded-full"
      onClick={onClick}
    >
      <SidebarPopularPromptSvg color={colors.whitebg.info} />
    </button>
  );
};
