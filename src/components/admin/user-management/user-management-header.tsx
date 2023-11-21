import SearchSet from "@/components/ui/inputs/search-set";
import { useState } from "react";

export default function UserManagementHeader({
  totalMemberNumber,
}: {
  totalMemberNumber: string;
}) {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="w-[1000px] mt-14 mx-12">
      <div className="text-h2 font-h2">사용자 관리</div>
      <div className="text-body-medium text-whitebg-info mt-1">
        사용자에 대한 정보 수정 및 권한 관리 등이 가능합니다.
      </div>
      <div className="flex justify-between mt-10 items-center">
        <div>
          <span className="font-bold">{totalMemberNumber ?? 0}</span>명의 사용자{" "}
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
