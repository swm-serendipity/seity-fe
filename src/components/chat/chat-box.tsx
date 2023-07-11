"use client";
import { useEffect, useState } from "react";
import SideBarBox from "./sidebar/sidebar-box";
import PromptBox from "./prompt/prompt-box";
import SidebarHiddenButton from "./sidebar/sidbar-hidden-button";
import { useStore } from "@/store/store";
import DeIdentificationPopupBox from "./de-identification-popup/de-identification-popup.box";

export default function ChatBox() {
  const [showSidebar, setShowSidebar] = useState(true);
  const isPopupOpen = useStore((state) => state.isPopupOpen);

  useEffect(() => {
    const checkScreenSize = () => {
      setShowSidebar(window.innerWidth > 885);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="h-screen relative flex">
      <SideBarBox showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      {!showSidebar && (
        <SidebarHiddenButton
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
        />
      )}
      <PromptBox />
      {isPopupOpen && <DeIdentificationPopupBox />}
    </div>
  );
}
