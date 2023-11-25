import { Dispatch, SetStateAction } from "react";
import { ColoredButton } from "../color-button";
import { useStore } from "@/store/store";

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
  const { setPopupData } = useStore();
  const handleSearch = () => {
    setPopupData({
      type: "title-ok",
      isVisible: true,
      title: "알림",
      content: "비활성화 된 기능입니다.\n관리자에게 문의해주세요.",
      handleCancel: () => {},
      handleOk: () => {},
    });
  };
  return (
    <div className="flex gap-2.5">
      <input
        className="text-body-medium outline-none w-[240px] h-[42px] bg-white
          border border-border-default rounded-md flex items-center pl-3.5"
        placeholder={placeholder}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <ColoredButton
        color="default"
        onClick={handleSearch}
        buttonText={buttonText}
        textColor="white"
        width={80}
        height={42}
      />
    </div>
  );
}
