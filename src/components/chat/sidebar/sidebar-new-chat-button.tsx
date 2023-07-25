import { useRouter } from "next/navigation";

export default function SidebarNewChatButton() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/chat");
  };
  return (
    <button
      onClick={handleClick}
      className="w-full h-[40px] border border-dashed border-gray-600 
    mt-2 rounded-lg flex justify-center items-center text-gray-300 text-body-small font-body-small"
    >
      + 새로운 채팅 시작
    </button>
  );
}
