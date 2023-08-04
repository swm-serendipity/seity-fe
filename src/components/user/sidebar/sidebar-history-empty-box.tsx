import Image from "next/image";

export default function SidebarHistoryEmptyBox() {
  return (
    <div className="border-t border-sidebar-button-divider h-full">
      <div className="flex flex-col gap-2.5 justify-center items-center h-full">
        <Image
          src="/sidebar-comment.svg"
          width={24}
          height={24}
          alt="seity를 사용해보세요"
        />
        <p className="text-blackbg-disable mb-8">Seity Chat을 이용해보세요!</p>
      </div>
    </div>
  );
}
