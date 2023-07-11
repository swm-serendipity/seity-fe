"use client";
import { useEffect, useState } from "react";
import SideBarBox from "./sidebar/sidebar-box";
import PromptBox from "./prompt/prompt-box";
import SidebarHiddenButton from "./sidebar/sidbar-hidden-button";

export default function ChatBox() {
  const [showSidebar, setShowSidebar] = useState(true);

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
    </div>
  );
}
