import { Dispatch, SetStateAction } from "react";
import { ColoredButton } from "../color-button";

type SearchSetProps = {
  placeholder: string;
  buttonText: string;
  text: string;
  setText: Dispatch<SetStateAction<string>>;
};

export default function SearchSet({
  placeholder,
  buttonText,
  text,
  setText,
}: SearchSetProps) {
  return (
    <div className="flex gap-2.5">
      <div
        className="w-[240px] h-[42px] bg-white
      border border-border-default rounded-md flex items-center pl-3.5"
      >
        <input
          className="text-body-medium outline-none"
          placeholder={placeholder}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <ColoredButton
        color="default"
        buttonText={buttonText}
        textColor="white"
        width={80}
        height={42}
      />
    </div>
  );
}
