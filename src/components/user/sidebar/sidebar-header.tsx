import Image from "next/image";
import { FoldIconButton } from "./sidebar-menu-buttons";
import { Dispatch, SetStateAction } from "react";
import { useRouter } from "next/navigation";

type SidebarHeaderProps = {
  setShowSidebar: Dispatch<SetStateAction<boolean>>;
};

export default function SidebarHeader({ setShowSidebar }: SidebarHeaderProps) {
  const router = useRouter();

  const handleFoldButton = () => {
    setShowSidebar(false);
  };
  const handleLogo = () => {
    router.push("/chat");
  };
  return (
    <div className="flex items-center ml-7 mt-7 mr-5 justify-between">
      <Image
        width={100}
        height={24}
        src="/common/logo.svg"
        alt="seity 로고"
        className="object-cover"
        priority
        onClick={handleLogo}
      />
      <FoldIconButton color="black" onClick={handleFoldButton} />
    </div>
  );
}
