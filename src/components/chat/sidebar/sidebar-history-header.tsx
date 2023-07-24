import Image from "next/image";
import SidebarNewChatButton from "./sidebar-new-chat-button";

type SidebarHistoryHeaderProps = {
  isHistory: boolean;
};

export default function SidebarHistoryHeader({
  isHistory,
}: SidebarHistoryHeaderProps) {
  return (
    <div className="mx-5 mb-1">
      <div className="text-blackbg-default text-h4 font-h4 mb-2.5">History</div>
      {isHistory && (
        <div>
          <div className="h-[40px] rounded-md bg-sidebar-button-hr flex items-center">
            <input
              className="bg-sidebar-button-hr ml-3 text-blackbg-default text-body-small outline-none w-[160px]"
              placeholder="프롬프트를 검색해보세요!"
            />

            <button className="ml-4">
              <Image
                src="/sidebar-search.svg"
                width={16}
                height={16}
                alt="검색하기"
              />
            </button>
          </div>
          <SidebarNewChatButton />
        </div>
      )}
    </div>
  );
}
