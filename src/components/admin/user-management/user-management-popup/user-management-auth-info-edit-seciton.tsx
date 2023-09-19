import CheckBox from "@/components/ui/checkbox";
import { HintTextInputBox } from "@/components/ui/input-box";
import { useStore } from "@/store/store";
import { useState } from "react";

export default function UserManagementAuthInfoEditSection() {
  const { setPopupData } = useStore();
  const [promptAuth, setPromptAuth] = useState(false);
  const [userManagementAuth, setUserManagementAuth] = useState(false);
  const handleDeleteUserButton = () => {
    setPopupData({
      type: "title-ok",
      title: "알림",
      content: "비활성화 된 기능입니다.",
      handleCancel: () => {},
      handleOk: () => {},
      isVisible: true,
    });
  };
  const [name, setName] = useState("");
  return (
    <div className="mt-7.5">
      <div className="flex justify-between items-end">
        <div className="font-[500] text-body-large">권한설정</div>
        <button
          className="text-body-small underline text-[#FF5E5E]"
          onClick={handleDeleteUserButton}
        >
          계정삭제
        </button>
      </div>
      <div className="w-full h-[1px] bg-black mt-2.5 mb-5"></div>
      <div className="flex justify-between items-center px-3.5 mb-4">
        <div className="text-body-medium">권한선택</div>
        <div className="-mb-2">
          <HintTextInputBox
            width={320}
            height={46}
            hintText="권한선택"
            text={name}
            setText={setName}
          />
        </div>
      </div>
      <div className="flex justify-between items-center px-3.5 mb-5">
        <div className="text-body-medium">프롬프트 사용 권한</div>
        <CheckBox isChecked={promptAuth} setIsChecked={setPromptAuth} />
      </div>
      <div className="flex justify-between items-center px-3.5 mb-5">
        <div className="text-body-medium">사용자 관리 권한</div>
        <CheckBox
          isChecked={userManagementAuth}
          setIsChecked={setUserManagementAuth}
        />
      </div>
      <div className="w-full h-[1px] bg-border-default mt-5"></div>
    </div>
  );
}
