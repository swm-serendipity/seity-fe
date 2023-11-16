import { Dispatch, SetStateAction, useState } from "react";
import ForbiddenWordManagementChip from "./forbidden-word-management-chip";
import { toast } from "react-toastify";
import ForbiddenWordSet from "@/components/ui/inputs/forbidden-word-set";
import { text } from "stream/consumers";
import { useMutation } from "@tanstack/react-query";
import deleteForbiddenWord from "@/apis/delete-forbidden-word";

type ForbiddenWordManagementBottomSectionProps = {
  textDatas: { word: string; id: string }[];
  setTextDatas: Dispatch<SetStateAction<{ word: string; id: string }[]>>;
};

export default function ForbiddenWordManagementBottomSection({
  textDatas,
  setTextDatas,
}: ForbiddenWordManagementBottomSectionProps) {
  const [highlightText, setHighlightText] = useState<string>("");
  const [searchText, setSearchText] = useState("");
  const { mutate } = useMutation(deleteForbiddenWord);
  const handleSearch = () => {
    if (searchText === "") {
      setHighlightText("");
      return;
    }
    const index = textDatas.findIndex(
      (textData) => textData.word === searchText
    );
    if (index === -1) {
      toast(`"${searchText}"라는 금칙어는 존재하지 않습니다.`, {
        type: "error",
      });
      setHighlightText("");
      return;
    }
    setHighlightText(textDatas[index].word);
    setTimeout(() => {
      setHighlightText("");
    }, 5000);
  };

  const handleDelete = (text: { word: string; id: string }) => {
    const deleteData = textDatas.filter((data) => data.word !== text.word);
    mutate(
      { wordId: text.id },
      {
        onSuccess: (data) => {
          toast(`"${text.word}" 금칙어가 성공적으로 삭제되었습니다.`, {
            type: "success",
          });
          setTextDatas(deleteData);
        },
        onError: (error) => {
          toast("금칙어 삭제에 실패했습니다.", {
            type: "error",
          });
        },
      }
    );
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
              text={text.word}
              active={highlightText === text.word}
              onClickDelete={() => handleDelete(text)}
            />
          );
        })}
      </div>
    </div>
  );
}
