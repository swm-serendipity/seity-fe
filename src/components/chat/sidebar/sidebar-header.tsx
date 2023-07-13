import Image from "next/image";
import { FoldIconButton } from "./sidebar-menu-buttons";
import { Dispatch, SetStateAction } from "react";

type SidebarHeaderProps = {
  setShowSidebar: Dispatch<SetStateAction<boolean>>;
};

export default function SidebarHeader({ setShowSidebar }: SidebarHeaderProps) {
  const handleFoldButton = () => {
    setShowSidebar(false);
  };
  return (
    <div className="flex items-center ml-7 mt-7 mr-5 gap-18">
      <Image
        width={95}
        height={24}
        src="/logo.svg"
        alt="seity 로고"
        className="object-cover"
      />
      <FoldIconButton color="black" onClick={handleFoldButton} />
    </div>
  );
}
