import { useMutation, useQuery } from "@tanstack/react-query";
import DashboardLeftCard from "./dashboard-left-card";
import getDetectionDashboard from "@/apis/get-detection-dashboard";
import { convertToDotFormat } from "@/utils/formatTime";

type DashboardLeftSectionProps = {
  seletedId: string | null;
  handleCard: (id: string) => void;
};

export default function DashboardLeftSection({
  seletedId,
  handleCard,
}: DashboardLeftSectionProps) {
  const { data, isLoading } = useQuery(["dashboard"], getDetectionDashboard);

  if (isLoading) return <div className="min-w-[420px] ml-12 pr-3"></div>;

  return (
    <div className="overflow-y-auto custom-scrollbar pr-3 ml-12 mt-7">
      {data.result.map((item: Detection) => {
        return (
          <DashboardLeftCard
            key={item.id}
            id={item.id}
            title={item.question}
            nameColor={item.profileTextHex}
            nameBackgroundColor={item.profileBackgroundHex}
            name={item.userName}
            time={convertToDotFormat(item.createdAt)}
            isSelected={item.id === seletedId}
            handleCard={handleCard}
          />
        );
      })}
    </div>
  );
}
