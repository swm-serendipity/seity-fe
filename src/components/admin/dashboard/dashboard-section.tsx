import { useState } from "react";
import DashboardHeader from "./dashboard-header";
import DashboardLeftSection from "./dashboard-left-section";
import DashboardRightSection from "./dashboard-right-section";
import { useInfiniteQuery } from "@tanstack/react-query";
import getDetectionDashboard from "@/apis/get-detection-dashboard";

export default function DashboardSection() {
  const [seletedId, setSelectedId] = useState<string | null>(null);
  const handleCard = (id: string) => {
    setSelectedId(id);
  };

  const { data, isLoading, fetchNextPage, hasNextPage, refetch } =
    useInfiniteQuery(
      ["dashboard"],
      ({ pageParam = 0 }) => getDetectionDashboard(pageParam),
      {
        getNextPageParam: (lastPage, allPages) => {
          if (
            lastPage.result.detections &&
            lastPage.result.detections.length > 0
          ) {
            return allPages.length;
          }
          return false;
        },
      }
    );

  return (
    <div className="flex flex-grow w-full flex-1 h-screen bg-[#FAFAFA] z-10">
      <div className="flex-col flex mr-6">
        <DashboardHeader />
        <DashboardLeftSection
          seletedId={seletedId}
          handleCard={handleCard}
          data={data}
          isLoading={isLoading}
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
        />
      </div>
      {seletedId && (
        <DashboardRightSection
          seletedId={seletedId}
          setSelectedId={setSelectedId}
          refetch={refetch}
        />
      )}
    </div>
  );
}
