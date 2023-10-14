import ReactTextareaAutosize from "react-textarea-autosize";
import MessageManagementAdminChat from "./message-management-admin-chat";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import getAdminSingleHistory from "@/apis/get-admin-single-history";
import Lottie from "lottie-react";
import loadingLottie from "../../assets/loading-animation.json";
import { useStore } from "@/store/store";
type MessageManagementChatSectionProps = {
  selectedCallingId: string;
};

export default function MessageManagementChatSection({
  selectedCallingId,
}: MessageManagementChatSectionProps) {
  const { data, isLoading } = useQuery(
    ["admin-calling", selectedCallingId],
    () => getAdminSingleHistory({ callingId: selectedCallingId })
  );
  const { setPopupData } = useStore();

  const [text, setText] = useState("");
  const isDisabled = text.length > 0;
  if (isLoading)
    return (
      <div className="w-full h-full flex justify-center items-center">
        <Lottie animationData={loadingLottie} className="" />
      </div>
    );
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex px-7.5 pt-5 pb-4.5 border-b border-[#E2E2E2] gap-3">
        <div
          className="w-10 h-10 rounded-full flex justify-center items-center"
          style={{
            backgroundColor: data.result.userProfileBackgroundHex,
            color: data.result.userProfileTextHex,
          }}
        >
          {data.result.userName[0]}
        </div>
        <div className="flex flex-col justify-between">
          <div className="text-body-large font-h4">{data.result.userName}</div>
          <div className="text-body-small text-whitebg-info">Front-end</div>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <MessageManagementAdminChat result={data.result} />
        <div className="w-full min-h-[100px] flex justify-center items-center bg-white">
          <div className="flex items-center bg-prompt-ai-select-bg w-full xl:w-[768px] mx-4 md:mx-7 min-h-[58px] rounded-xl my-5 relative">
            <ReactTextareaAutosize
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
              onClick={() => {
                setPopupData({
                  type: "title-ok",
                  content: "메세지 보내기 기능은 비활성화 되어 있어요.",
                  handleCancel: () => {},
                  handleOk: () => {},
                  isVisible: true,
                  title: "알림",
                });
              }}
            >
              보내기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
