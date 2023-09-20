import { DropdownBox } from "@/components/ui/dropdown-box";
import { HintTextInputBox } from "@/components/ui/input-box";
import { useState } from "react";

export default function UserManagementInfoEditSection() {
  const [name, setName] = useState("");
  return (
    <div className="mt-7.5">
      <div className="font-[500] text-body-large">정보수정</div>
      <div className="w-full h-[1px] bg-black mt-2.5 mb-5"></div>
      <div className="flex justify-between items-center px-3.5 mb-4">
        <div className="text-body-medium">사용자 이름</div>
        <div className="-mb-2">
          <HintTextInputBox
            width={320}
            height={46}
            hintText="사용자 이름을 입력해주세요."
            text={name}
            setText={setName}
          />
        </div>
      </div>
      <div className="flex justify-between items-center px-3.5">
        <div className="text-body-medium">직무 선택</div>
        <div className="-mb-2">
          <DropdownBox
            width={320}
            height={46}
            hintText="직무선택"
            items={["frontend", "backend", "ai", "data"]}
          />
        </div>
      </div>
      <div className="w-full h-[1px] bg-border-default mt-5"></div>{" "}
    </div>
  );
}
