"use client";
import { useEffect, useState } from "react";
import SideBarBox from "./sidebar/sidebar-box";
import {
  FoldIconButton,
  NotificationIconButton,
  PopularPromptButton,
} from "../ui/icon-button";
import PromptBox from "./prompt/prompt-box";

export default function ChatBox() {
  const [showSidebar, setShowSidebar] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setShowSidebar(window.innerWidth > 640);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleFoldButton = () => {
    setShowSidebar(true);
  };
  return (
    <div
      className="h-screen relative grid"
      style={{
        gridTemplateColumns: showSidebar ? "260px auto" : "0 auto",
      }}
    >
      <SideBarBox showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div className="absolute top-6 left-5 z-0 items-center hidden sm:flex">
        {!showSidebar && (
          <FoldIconButton color="white" onClick={handleFoldButton} />
        )}
        <div className="ml-3.5">
          <NotificationIconButton isAlert={true} onClick={() => {}} />
        </div>
        <div className="ml-2.5">
          <PopularPromptButton onClick={() => {}} />
        </div>
      </div>
      <PromptBox />
    </div>
  );
}
