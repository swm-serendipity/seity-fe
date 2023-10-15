import deleteCalling from "@/apis/delete-calling";
import patchSolveCalling from "@/apis/patch-solve-calling";
import SemiColorButton from "@/components/ui/semi-color-button";
import { useStore } from "@/store/store";
import formatDate from "@/utils/formatDate";
import { highlightedDetectionList } from "@/utils/highlightedDetectionList";
import { useMutation, useQueryClient } from "@tanstack/react-query";

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
  const { setPopupData, setSelectedCallingId } = useStore();
  const queryClient = useQueryClient();

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

  const { mutate: mutateDeleteCalling } = useMutation(deleteCalling, {
    onSuccess: (data) => {
      setPopupData({
        type: "title-ok",
        content: "정상 삭제 되었습니다.",
        handleCancel: () => {},
        handleOk: () => {},
        isVisible: true,
        title: "알림",
      });
      queryClient.invalidateQueries(["admin-calling-request"]);
      setSelectedCallingId("");
    },
    onError: (error) => {
      setPopupData({
        type: "title-ok",
        content: "문제가 발생했습니다. 잠시 후에 다시 시도해주세요.",
        handleCancel: () => {},
        handleOk: () => {},
        isVisible: true,
        title: "알림",
      });
    },
  });

  const { mutate: mutateApproveCalling } = useMutation(patchSolveCalling, {
    onSuccess: (data) => {
      setPopupData({
        type: "title-ok",
        content: "정상 처리 되었습니다.",
        handleCancel: () => {},
        handleOk: () => {},
        isVisible: true,
        title: "알림",
      });
      queryClient.invalidateQueries(["admin-calling-request"]);
      setSelectedCallingId("");
    },
    onError: (error) => {
      setPopupData({
        type: "title-ok",
        content: "문제가 발생했습니다. 잠시 후에 다시 시도해주세요.",
        handleCancel: () => {},
        handleOk: () => {},
        isVisible: true,
        title: "알림",
      });
    },
  });

  const highlightedText = highlightedDetectionList({
    text: result.detection.question,
    detectionList: result.detection.detectionList,
  });

  return (
    <div className="flex-1 w-full h-full overflow-y-auto px-7.5 custom-scrollbar">
      <div className="flex-col flex">
        <div className="flex mt-5 justify-end">
          <div className="flex flex-col gap-1.5">
            <div className="w-[320px] min-h-[200px] bg-[#F9F9F9] rounded-xl flex-col border-[#E6E6E6] border">
              <div className="ml-5 mt-5 mb-4 font-bold">소명요청</div>
              <div className="border-b mx-[15px]" />
              <div className="flex-1 flex flex-col mx-5 gap-2.5 mt-4 text-body-medium pb-3">
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
              <div className="border-b mx-[15px]" />
              <div className="pt-2 pb-3 text-body-medium flex-col flex gap-1.5 mx-5">
                <div>질의 내용</div>
                <div className="pr-3 text-whitebg-serve">
                  {highlightedText.map((part, index) => (
                    <span
                      key={index}
                      className={`${
                        part.highlight && part.deIdentified && "highlight-green"
                      } ${
                        part.highlight && !part.deIdentified && "highlight-red"
                      } cursor-pointer`}
                    >
                      {part.text}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <SemiColorButton
                text="삭제"
                type="negative"
                onClick={() =>
                  mutateDeleteCalling({ callingId: result.callingId })
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-col flex">
        <div className="flex mt-5 justify-start">
          <div className="flex flex-col gap-1.5">
            <div className="bg-[#F9F9F9] rounded-e-xl rounded-ee-xl rounded-bl-xl border-[#E6E6E6] border text-body-medium px-5 py-4 flex flex-col gap-1.5">
              <div>응답 내용</div>
              <div className="text-whitebg-serve">{result.content}</div>
            </div>
            <div className="flex justify-end">
              <SemiColorButton
                text="승인"
                type="positive"
                onClick={() => {
                  mutateApproveCalling({ callingId: result.callingId });
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
