import deleteDetectionDashboard from "@/apis/delete-detection-dashboard";
import getSingleDetectionDashboard from "@/apis/get-single-detection-dashboard";
import postCallingDetectionDashboard from "@/apis/post-calling-detection-dashboard";
import { ColoredButton } from "@/components/ui/color-button";
import { useStore } from "@/store/store";
import Lottie from "lottie-react";
import loadingLottie from "@/components/assets/lottie/loading-animation.json";
import { convertToDotFormat } from "@/utils/formatTime";
import { highlightedDetectionList } from "@/utils/highlightedDetectionList";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Dispatch, SetStateAction } from "react";

type DashboardRightSectionProps = {
  seletedId: string;
  setSelectedId: Dispatch<SetStateAction<string | null>>;
  refetch: () => void;
};

export default function DetectionRequestRightSection({
  seletedId,
  setSelectedId,
  refetch,
}: DashboardRightSectionProps) {
  const { data, isLoading } = useQuery(
    ["detection-item", seletedId],
    getSingleDetectionDashboard
  );
  const queryClient = useQueryClient();

  const { mutate: deleteDetectionMutate } = useMutation(
    deleteDetectionDashboard,
    {
      onSuccess: (data) => {
        refetch();
      },
    }
  );

  const { mutate: callingDetectionMutate } = useMutation(
    postCallingDetectionDashboard,
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries(["detection-requests"]);
        setPopupData({
          type: "title-ok",
          title: "소명 요청",
          content: "소명 요청을 완료했습니다.",
          handleCancel: () => {},
          handleOk: () => {
            setSelectedId(null);
          },
          isVisible: true,
        });
      },
    }
  );

  const { setPopupData } = useStore();

  const handleIgnoreButton = () => {
    setPopupData({
      type: "title-ok-cancel",
      title: "알림",
      content: "정말 삭제하시겠습니까?",
      handleCancel: () => {},
      handleOk: () => {
        setSelectedId(null);
        deleteDetectionMutate({ id: seletedId });
      },
      isVisible: true,
    });
  };

  const handleRequestButton = () => {
    callingDetectionMutate({
      promptDetectionId: seletedId,
    });
  };

  if (isLoading)
    return (
      <div className="bg-white w-full flex-1 h-full flex justify-center items-center">
        <Lottie animationData={loadingLottie} />
      </div>
    );
  const result: DetectionSingleItem = data.result;
  const highlightedText = highlightedDetectionList({
    text: result.question,
    detectionList: result.detectionList,
  });
  return (
    <div className="bg-white flex-1 h-full pt-[130px] pl-11">
      <div className="flex flex-col h-full w-[450px] gap-5">
        <div className="flex justify-between items-center ">
          <div className="flex items-center gap-2">
            <div
              className="w-6 h-6 rounded-full flex justify-center items-center text-body-small"
              style={{
                color: result.profileTextHex,
                backgroundColor: result.profileBackgroundHex,
              }}
            >
              {result.userName.slice(0, 1)}
            </div>
            <div className="text-body-medium text-whitebg-serve">
              {result.userName}
            </div>
          </div>
          <div className="text-body-small text-whitebg-info">
            {convertToDotFormat(result.createdAt)}
          </div>
        </div>
        <div className="text-body-medium border-b border-b-border-default pb-5 max-h-[500px] overflow-y-auto custom-scrollbar pr-3">
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
        <div className="flex justify-end gap-2">
          <ColoredButton
            buttonText="무시하기"
            color="gray"
            textColor="black"
            width={90}
            height={36}
            onClick={handleIgnoreButton}
          />
          <ColoredButton
            buttonText="소명 요청"
            color="point"
            textColor="black"
            width={90}
            height={36}
            onClick={handleRequestButton}
          />
        </div>
      </div>
    </div>
  );
}
