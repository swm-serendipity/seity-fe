"use client";

import { PropsWithChildren } from "react";
import SidebarHiddenButton from "./sidebar-hidden-button";
import useSidebarWindowResize from "@/hooks/useSidebarWindowResize";
import SideBarBox from "./sidebar-box";

export default function SidebarLayout({ children }: PropsWithChildren) {
  const [showSidebar, setShowSidebar, showHiddenButton, setShowHiddenButton] =
    useSidebarWindowResize(true);
  return (
    <div className="flex z-50 h-screen w-full">
      <SideBarBox
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        setShowHiddenButton={setShowHiddenButton}
      />
      {showHiddenButton && (
        <SidebarHiddenButton
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
        />
      )}
      {children}
    </div>
  );
}
