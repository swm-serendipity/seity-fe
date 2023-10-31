import Divider from "@/components/ui/divider";
import ForbiddenWordManagementRegister from "./forbidden-word-management-register";
import ForbiddenWordManagementHeader from "./forbidden-word-managment-header";
import ForbiddenWordManagementBottomSection from "./forbidden-word-management-bottom-section";
import { useState } from "react";

export default function ForbiddenWordManagementSection() {
  const [textDatas, setTextDatas] = useState<string[]>([
    "프론트엔드",
    "백엔드",
    "AI",
    "주민등록번호",
    "사장님",
    "회장님",
    "주임님",
    "대리님",
    "금칙어",
    "전화번호",
    "운전자번호",
    "포론토온도",
    "라랄라랄",
  ]);
  return (
    <div className=" flex-grow w-full flex-1 h-screen bg-[#FAFAFA] z-10 overflow-y-auto">
      <ForbiddenWordManagementHeader />
      <div className="flex ml-12 mt-8 mb-10 gap-5">
        <div className="w-[940px] h-[870px] bg-white notice-card rounded-xl px-10 py-9">
          <ForbiddenWordManagementRegister
            textDatas={textDatas}
            setTextDatas={setTextDatas}
          />
          <Divider height={1} className="my-[60px]" />
          <ForbiddenWordManagementBottomSection
            textDatas={textDatas}
            setTextDatas={setTextDatas}
          />
        </div>
      </div>
    </div>
  );
}
