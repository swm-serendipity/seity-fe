import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import MessageManagementAdminChat from "./message-management-admin-chat";

export default function MessageManagementRightSection() {
  const [text, setText] = useState("");
  const isDisabled = text.length > 0;
  return (
    <div className="bg-white notice-card w-[580px] h-[870px] rounded-xl flex flex-col">
      <div className="flex px-7.5 pt-5 pb-4.5 border-b border-[#E2E2E2] gap-3">
        <div className="w-10 h-10 rounded-full bg-slate-300"></div>
        <div className="flex flex-col justify-between">
          <div className="text-body-large font-h4">Yoon Jay</div>
          <div className="text-body-small text-whitebg-info">Front-end</div>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <MessageManagementAdminChat />
        <div className="w-full min-h-[100px] flex justify-center items-center bg-white">
          <div className="flex items-center bg-prompt-ai-select-bg w-full xl:w-[768px] mx-4 md:mx-7 min-h-[58px] rounded-xl my-5 relative">
            <TextareaAutosize
              value={text}
              onChange={(text) => setText(text.target.value)}
              maxRows={7}
              placeholder="텍스트를 입력하세요..."
              className="w-full resize-none px-5 focus:border-transparent outline-none my-4 bg-prompt-ai-select-bg"
            />
            <button
              className={`mx-3 w-[76px] h-[38px] rounded-md ${
                isDisabled
                  ? "bg-blackbg-point text-whitebg-default"
                  : "bg-blackbg-serve text-whitebg-disable"
              }`}
              disabled={!isDisabled}
            >
              보내기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
