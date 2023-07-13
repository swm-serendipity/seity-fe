import { SidebarHistoryButton } from "@/components/ui/sidebar-button";

export default function SidebarHistoryFullBox() {
  return (
    <div className="flex-1">
      <div className="flex-1">
        <div className="mt-6">
          <div className="text-blackbg-disable text-body-small">어제</div>
          <div>
            <SidebarHistoryButton
              text="맛집 찾아줘"
              onClick={() => {}}
              select
            />
            <SidebarHistoryButton
              text="디카페인의 원리는?"
              onClick={() => {}}
            />
          </div>
        </div>
        <div className="mt-6">
          <div className="text-blackbg-disable text-body-small">이번주</div>
          <div>
            <SidebarHistoryButton
              text="Quantum Computing Explosion is good"
              onClick={() => {}}
            />
            <SidebarHistoryButton text="세종대왕의 비밀" onClick={() => {}} />
            <SidebarHistoryButton
              text="AI는 어떻게 작용하는가?"
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
