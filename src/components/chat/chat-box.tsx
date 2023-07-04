"use client";
import { useState } from "react";
import SideBarBox from "./sidebar/sidebar-box.client";
import { FoldIconButton } from "../ui/icon-button";
import PromptBox from "./prompt/prompt-box";

export default function ChatBox() {
  const [showSidebar, setShowSidebar] = useState(true);
  const handleFoldButton = () => {
    setShowSidebar(true);
    console.log(1);
  };
  return (
    <div
      className="h-screen relative grid"
      style={{
        gridTemplateColumns: showSidebar ? "260px auto" : "0 auto",
      }}
    >
      <SideBarBox showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      {!showSidebar && (
        <div className="absolute top-6 left-5 z-0">
          <FoldIconButton color="white" onClick={handleFoldButton} />
        </div>
      )}
      <PromptBox />
    </div>
  );
}
