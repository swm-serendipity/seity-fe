import { Dispatch, SetStateAction, useState } from "react";
import ForbiddenWordManagementChip from "./forbidden-word-management-chip";
import { toast } from "react-toastify";
import ForbiddenWordSet from "@/components/ui/inputs/forbidden-word-set";

type ForbiddenWordManagementBottomSectionProps = {
  textDatas: string[];
  setTextDatas: Dispatch<SetStateAction<string[]>>;
};

export default function ForbiddenWordManagementBottomSection({
  textDatas,
  setTextDatas,
}: ForbiddenWordManagementBottomSectionProps) {
  const [highlightText, setHighlightText] = useState<string>("");
  const [searchText, setSearchText] = useState("");
  const handleSearch = () => {
    if (searchText === "") {
      setHighlightText("");
      return;
    }
    const index = textDatas.findIndex((text) => text === searchText);
    if (index === -1) {
      toast(`"${searchText}"라는 금칙어는 존재하지 않습니다.`, {
        type: "error",
      });
      setHighlightText("");
      return;
    }
    setHighlightText(textDatas[index]);
    setTimeout(() => {
      setHighlightText("");
    }, 5000);
  };
  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-2">
        <div className="text-h4 font-h4">등록된 금칙어</div>
        <div>
          총 <span className="text-[#29CCA4]">{textDatas.length}</span>개
        </div>
      </div>
      <ForbiddenWordSet
        placeholder="검색어를 입력해주세요."
        buttonText="검색"
        onClick={handleSearch}
        text={searchText}
        setText={setSearchText}
      />
      <div className="flex gap-2.5 flex-wrap">
        {textDatas.map((text, index) => {
          return (
            <ForbiddenWordManagementChip
              key={index}
              text={text}
              active={highlightText === text}
              onClickDelete={() => {
                const deleteData = textDatas.filter((data) => data !== text);
                setTextDatas(deleteData);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
