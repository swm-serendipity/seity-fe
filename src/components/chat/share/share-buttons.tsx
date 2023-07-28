import { ColoredButton } from "@/components/ui/color-button";
import { useStore } from "@/store/store";

export default function ShareButtons() {
  const { setPopupData, toggleSharePopup } = useStore();

  const handleButton = () => {
    toggleSharePopup();
    setPopupData({
      isVisible: true,
      title: "아직 개발되지 않은 기능이에요!",
      content: "추후 더 멋있는 모습으로 공개할게요!",
      handleCancel: () => {},
      handleOk: () => {},
    });
  };

  return (
    <div className="flex gap-3.5 mt-10">
      <ColoredButton
        buttonText="Copy Link"
        color="white"
        onClick={handleButton}
        textColor="black"
      />
      <ColoredButton
        buttonText="Send"
        color="point"
        onClick={handleButton}
        textColor="black"
      />
    </div>
  );
}
