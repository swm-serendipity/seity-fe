import SearchSet from "@/components/ui/search/search-set";
import { useState } from "react";

export default function PostsAllHeader() {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="w-[1000px] mt-10 mx-12">
      <div className="text-h2 font-h2">공유된 프롬프트 전체보기</div>
      <div className="text-body-medium text-whitebg-info mt-1">
        공유된 프롬프트를 확인할 수 있습니다.
      </div>
      <div className="flex justify-between mt-10 items-center">
        <div>
          <span className="font-bold">1,294</span>건의 공유된 프롬프트{" "}
        </div>
        <SearchSet
          placeholder="검색어를 입력해 주세요."
          buttonText="검색"
          text={searchText}
          setText={setSearchText}
        />
      </div>
    </div>
  );
}
