import { ColoredButton } from "@/components/ui/color-button";

type ShareButtonsProps = {
  handleButton: () => void;
};

export default function ShareButtons({ handleButton }: ShareButtonsProps) {
  return (
    <div className="flex gap-3.5 mt-6 justify-center items-center">
      <ColoredButton
        buttonText="공유하기"
        width={480}
        color="point"
        onClick={handleButton}
        textColor="black"
      />
    </div>
  );
}
