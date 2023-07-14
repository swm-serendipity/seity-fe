import { ColoredButton } from "@/components/ui/color-button";

export default function ShareButtons() {
  return (
    <div className="flex gap-3.5 mt-10">
      <ColoredButton
        buttonText="Copy Link"
        color="white"
        onClick={() => {}}
        textColor="black"
      />
      <ColoredButton
        buttonText="Send"
        color="point"
        onClick={() => {}}
        textColor="black"
      />
    </div>
  );
}
