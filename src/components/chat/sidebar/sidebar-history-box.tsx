import SidebarHistoryEmptyBox from "./sidebar-history-empty-box";
import SidebarHistoryFullBox from "./sidebar-history-full-box";

type SidebarHistoryBoxProps = {
  isHistory: boolean;
};

export default function SidebarHistoryBox({
  isHistory,
}: SidebarHistoryBoxProps) {
  return (
    <div className="mx-5 flex-col flex overflow-y-auto custom-scrollbar flex-1">
      {isHistory ? <SidebarHistoryFullBox /> : <SidebarHistoryEmptyBox />}
    </div>
  );
}
