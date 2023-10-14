import SemiColorButton from "@/components/ui/semi-color-button";
import { useStore } from "@/store/store";
import formatDate from "@/utils/formatDate";

type MessageManagementAdminChatProps = {
  result: {
    callingId: string;
    llm: string;
    createdAt: string;
    deadline: string;
    userId: string;
    userName: string;
    userProfileBackgroundHex: string;
    userProfileTextHex: string;
    detection: {
      id: string;
      userId: string;
      userName: string;
      profileBackgroundHex: string;
      profileTextHex: string;
      promptId: string;
      question: string;
      detectionList: [
        {
          index: number;
          length: number;
          detectionInfo: string;
          deIdentified: boolean;
        }
      ];
      createdAt: string;
    };
    status: string;
    content: string;
  };
};

export default function MessageManagementAdminChat({
  result,
}: MessageManagementAdminChatProps) {
  const { setPopupData } = useStore();

  const handleDevelopButton = () => {
    setPopupData({
      type: "title-ok",
      content: "해당 기능은 비활성화 되어 있어요.",
      handleCancel: () => {},
      handleOk: () => {},
      isVisible: true,
      title: "알림",
    });
  };

  return (
    <div className="flex-1 w-full h-full overflow-y-auto px-7.5">
      <div className="flex-col flex">
        <div className="flex mt-5 justify-end">
          <div className="flex flex-col gap-1.5">
            <div className="w-[260px] h-[200px] bg-[#F9F9F9] rounded-xl flex-col border-[#E6E6E6] border">
              <div className="ml-5 mt-5 mb-4 font-bold">소명요청</div>
              <div className="border-b mx-[15px]" />
              <div className="flex-1 flex flex-col mx-5 gap-2.5 mt-4 text-body-medium">
                <div>소명 정보</div>
                <div className="flex justify-between">
                  <div className="text-whitebg-info">사용한 LLM</div>
                  <div className="text-whitebg-serve">{result.llm}</div>
                </div>
                <div className="flex justify-between">
                  <div className="text-whitebg-info">발생일시</div>
                  <div className="text-whitebg-serve">
                    {formatDate(result.createdAt)}
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="text-whitebg-info">마감기한</div>
                  <div className="text-whitebg-serve">
                    {formatDate(result.deadline)}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <SemiColorButton
                text="삭제"
                type="negative"
                onClick={handleDevelopButton}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-col flex">
        <div className="flex mt-5 justify-start">
          <div className="flex flex-col gap-1.5">
            <div className="bg-[#F9F9F9] rounded-e-xl rounded-ee-xl rounded-bl-xl border-[#E6E6E6] border text-whitebg-serve text-body-medium px-5 py-4">
              {result.content}
            </div>
            <div className="flex justify-end">
              <SemiColorButton
                text="승인"
                type="positive"
                onClick={handleDevelopButton}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
