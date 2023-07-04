"use client";
import { useState } from "react";
import SideBarBox from "../sidebar/sidebar-box.client";
import { FoldIconButton } from "../ui/icon-button";

export default function ChatBox() {
  const [showSideBar, setShowSideBar] = useState(true);
  const handleFoldButton = () => {
    setShowSideBar(true);
  };
  return (
    <div className="flex h-screen relative">
      <SideBarBox showSidebar={showSideBar} setShowSidebar={setShowSideBar} />
      {!showSideBar && (
        <div className="absolute top-6 left-5 z-0">
          <FoldIconButton color="white" onClick={handleFoldButton} />
        </div>
      )}
      <div className="flex-grow"></div>
    </div>
  );
}
