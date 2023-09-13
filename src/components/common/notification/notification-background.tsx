import { useStore } from "@/store/store";

export default function NotificationBackground() {
  const disableNotification = useStore((state) => state.disableNotification);
  return (
    <div
      className="absolute opacity-40 bg-black w-full h-full z-10"
      onClick={disableNotification}
    />
  );
}
