import { useStore } from "@/store/store";
import { usePathname, useRouter } from "next/navigation";

export default function SidebarNewChatButton() {
  const router = useRouter();
  const pathName = usePathname();

  const {
    setChatData,
    setChatSessionId,
    setChatLLM,
    isAnswering,
    setPopupData,
  } = useStore();

  const handleClick = () => {
    if (isAnswering) {
      setPopupData({
        type: "title-ok",
        isVisible: true,
        title: "알림",
        content: "답변 중에는 다른 페이지로 이동 할 수 없어요.",
        handleCancel: () => {},
        handleOk: () => {},
      });
      return;
    }
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
