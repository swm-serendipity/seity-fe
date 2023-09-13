import getSingleDetectionDashboard from "@/apis/get-single-detection-dashboard";
import { ColoredButton } from "@/components/ui/color-button";
import { convertToDotFormat } from "@/utils/formatTime";
import { highlightedDetectionList } from "@/utils/highlightedDetectionList";
import { useQuery } from "@tanstack/react-query";

type DashboardRightSectionProps = {
  seletedId: string | null;
};

export default function DashboardRightSection({
  seletedId,
}: DashboardRightSectionProps) {
  if (!seletedId) return <div className="bg-white w-full flex-1 h-full"></div>;

  const { data, isLoading } = useQuery(
    ["dashboard-item", seletedId],
    getSingleDetectionDashboard
  );

  if (isLoading) return <div className="bg-white w-full flex-1 h-full"></div>;
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
          />
          <ColoredButton
            buttonText="소명 요청"
            color="point"
            textColor="black"
            width={90}
            height={36}
          />
        </div>
      </div>
    </div>
  );
}
