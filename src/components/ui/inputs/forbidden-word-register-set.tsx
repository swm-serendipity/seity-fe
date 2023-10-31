import { Dispatch, SetStateAction } from "react";
import { ColoredButton } from "../color-button";

type SearchSetProps = {
  placeholder: string;
  buttonText: string;
  text: string;
  setText: Dispatch<SetStateAction<string>>;
  onClick: () => void;
};

export default function ForbiddenWordRegisterSet({
  placeholder,
  buttonText,
  text,
  setText,
  onClick,
}: SearchSetProps) {
  return (
    <div className="flex gap-2.5">
      <input
        className="text-body-medium outline-none w-[360px] h-[46px] bg-white
          border border-border-default rounded-md flex items-center pl-3.5"
        placeholder={placeholder}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <ColoredButton
        onClick={onClick}
        color="default"
        buttonText={buttonText}
        textColor="white"
        width={110}
        height={46}
      />
    </div>
  );
}
