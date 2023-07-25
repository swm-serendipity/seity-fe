import { useStore } from "@/store/store";
import Image from "next/image";

export default function ShareHeader() {
  const toggleSharePopup = useStore((state) => state.toggleSharePopup);

  return (
    <div className="flex justify-between pb-10">
      <div className="text-h2 font-h2">공유하기</div>
      <button onClick={toggleSharePopup}>
        <Image src="/share-close.png" alt="close" width="20" height="20" />
      </button>
    </div>
  );
}
