import Image from "next/image";

type UserManagementPopupHeaderProps = {
  handleOutsideClick: () => void;
};

export default function UserManagementPopupHeader({
  handleOutsideClick,
}: UserManagementPopupHeaderProps) {
  return (
    <div className="flex justify-between">
      <div className="text-h3 font-h3">사용자 세부 설정</div>
      <button onClick={handleOutsideClick}>
        <Image src="/chat/share-close.png" alt="close" width="20" height="20" />
      </button>
    </div>
  );
}
