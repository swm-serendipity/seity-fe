"use client";

import { PropsWithChildren } from "react";
import SidebarHiddenButton from "./sidebar-hidden-button";
import useSidebarWindowResize from "@/hooks/useSidebarWindowResize";
import SideBarBox from "./sidebar-box";
import { useStore } from "@/store/store";
import CallingPopup from "@/components/ui/popup/calling-popup";
import useRequireLogin from "@/hooks/useRequireLogin";

export default function SidebarLayout({ children }: PropsWithChildren) {
  const [showSidebar, setShowSidebar, showHiddenButton, setShowHiddenButton] =
    useSidebarWindowResize(true);

  const { callingData } = useStore();
  const { isLoading } = useRequireLogin();

  return (
    <div className="flex z-50 h-screen max-w-full">
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
      {(callingData.isVisible || callingData.isLoading) && <CallingPopup />}

      {children}
    </div>
  );
}
