import { useStore } from "@/store/store";
import { usePathname, useRouter } from "next/navigation";

export default function SidebarNewChatButton() {
  const router = useRouter();
  const pathName = usePathname();

  const { setChatData, setChatSessionId, setChatLLM } = useStore();

  const handleClick = () => {
    if (pathName === "/chat") {
      setChatData(() => []);
      setChatSessionId("");
      setChatLLM("gpt-3.5-turbo");
    } else {
      router.push("/chat");
    }
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
