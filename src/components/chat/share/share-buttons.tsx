import { ColoredButton } from "@/components/ui/color-button";
import { useStore } from "@/store/store";
import { UseMutateFunction } from "@tanstack/react-query";

type ShareButtonsProps = {
  mutate: UseMutateFunction<any, unknown, any, unknown>;
};

export default function ShareButtons({ mutate }: ShareButtonsProps) {
  const { chatSessionId } = useStore();
  const handleButton = () => {
    if (chatSessionId === null) return;
    mutate({ promptSessionId: chatSessionId });
  };

  return (
    <div className="flex gap-3.5 mt-10 justify-center items-center">
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
