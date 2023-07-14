import { useStore } from "@/store/store";
import ShareHeader from "./share-header";
import ShareChatSection from "./share-chat-section";
import ShareTitleSection from "./share-title-section";
import ShareButtons from "./share-buttons";

export default function ShareBox() {
  const toggleSharePopup = useStore((state) => state.toggleSharePopup);
  const handleShareBoxClick = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
  };
  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-auto"
      onClick={toggleSharePopup}
    >
      <div
        className="bg-white w-[550px] h-[664px] rounded-3xl px-7.5 flex flex-col pt-6 pb-7.5"
        onClick={handleShareBoxClick}
      >
        <ShareHeader />
        <ShareChatSection />
        <ShareTitleSection />
        <ShareButtons />
      </div>
    </div>
  );
}
