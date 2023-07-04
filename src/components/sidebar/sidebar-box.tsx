"use client";
import Image from "next/image";
import { FoldIconButton } from "../ui/icon-button";
import SideBarProfile from "./sidebar-profile";
import { SidebarMenuButton } from "../ui/sidebar-button";

export default function SideBarBox() {
  return (
    <div className="bg-whitebg-default w-[260px] flex-shrink-0 rounded-tr-4xl">
      <div className="flex items-center ml-7 mt-7 mr-5 gap-18">
        <Image
          width={95}
          height={24}
          src="/logo.svg"
          alt="seity 로고"
          className="object-cover"
        />
        <FoldIconButton color="black" onClick={() => {}} />
      </div>
      <div className="ml-5 mt-16">
        <SideBarProfile />
      </div>
      <div className="mt-7">
        <SidebarMenuButton
          lefticon="/sidebar-popular-prompt.svg"
          text="인기 프롬프트"
          onClick={() => {}}
        />
      </div>
    </div>
  );
}
