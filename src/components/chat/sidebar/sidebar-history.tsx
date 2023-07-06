import { SidebarHistoryButton } from "@/components/ui/sidebar-button";
import Image from "next/image";

export default function SidebarHistory() {
  const isHistory = true;
  return (
    <div className="mx-5 flex-col flex overflow-y-auto">
      <div className="text-blackbg-default text-h4 font-h4 mb-2.5">History</div>
      {isHistory ? (
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
                alt="seity를 사용해보세요"
              />
            </button>
          </div>
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
      ) : (
        <div className="flex-1 border-t border-sidebar-button-divider">
          <div className="flex flex-col gap-2.5 justify-center items-center h-full">
            <Image
              src="/sidebar-comment.svg"
              width={24}
              height={24}
              alt="seity를 사용해보세요"
            />
            <p className="text-blackbg-disable mb-8">
              Seity Chat을 이용해보세요!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
