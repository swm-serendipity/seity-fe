import { colors } from "@/styles/color-guide";
import { useEffect, useState } from "react";
import SidebarShareSvg from "../assets/sidebar-share";
import SidebarDelteSvg from "../assets/sidebar-delete";

type SidebarHistoryButtonProps = {
  onClick: () => void;
};

export const SidebarShareIconButton = ({
  onClick,
}: SidebarHistoryButtonProps) => {
  const [color, setColor] = useState(colors.blackbg.default);

  const handleMouseDown = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    setColor(colors.blackbg.point);
    onClick();
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      setColor(colors.blackbg.default);
    };

    window.addEventListener("mouseup", handleGlobalMouseUp);

    return () => {
      window.removeEventListener("mouseup", handleGlobalMouseUp);
    };
  }, []);
  return (
    <button onMouseDown={handleMouseDown}>
      <SidebarShareSvg color={color} className="mr-2" />
    </button>
  );
};

export const SidebarDeleteIconButton = ({
  onClick,
}: SidebarHistoryButtonProps) => {
  const [color, setColor] = useState(colors.blackbg.default);

  const handleMouseDown = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    setColor(colors.blackbg.point);
    onClick();
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      setColor(colors.blackbg.default);
    };

    window.addEventListener("mouseup", handleGlobalMouseUp);

    return () => {
      window.removeEventListener("mouseup", handleGlobalMouseUp);
    };
  }, []);
  return (
    <button onMouseDown={handleMouseDown}>
      <SidebarDelteSvg color={color} className="mr-2" />
    </button>
  );
};
