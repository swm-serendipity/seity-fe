import Image from "next/image";
import SidebarPopularPromptSvg from "../assets/sidebar-popular-prompt";

type SidebarMenuButtonProps = {
  lefticon: string;
  righticon?: string;
  text: string;
  onClick?: () => void;
};
export const SidebarMenuButton = ({
  lefticon,
  righticon = "/sidebar-open.svg",
  text,
  onClick,
}: SidebarMenuButtonProps) => {
  return (
    <div
      className="flex w-[220px] h-[44px] bg-sidebar-button-default hover:bg-sidebar-button-hover 
    active:bg-sidebar-button-click text-body-medium text-blackbg-default active:text-blackbg-point items-center"
    >
      <SidebarPopularPromptSvg color="white" />
      {text}
      <Image src={righticon} alt={righticon} width={18} height={18} />
    </div>
  );
};
