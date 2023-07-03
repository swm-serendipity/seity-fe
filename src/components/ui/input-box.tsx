import React, { Dispatch, SetStateAction } from "react";

type Props = {
  hintText: string;
  password?: boolean;
  text: string;
  setText: Dispatch<SetStateAction<string>>;
};

export const HintTextInputBox = ({
  hintText,
  password,
  text,
  setText,
}: Props) => {
  return (
    <div className="w-[320px] h-[52px] flex-shrink-0 border rounded-md flex items-center pl-3 mb-2 bg-white">
      <input
        type={password ? "password" : "text"}
        placeholder={hintText}
        value={text}
        onChange={(text) => setText(text.target.value)}
        className="w-full h-full border-none outline-none text-black text-body-medium bg-transparent"
      />
    </div>
  );
};
