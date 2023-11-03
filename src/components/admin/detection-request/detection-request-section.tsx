import { useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import getDetectionRequest from "@/apis/get-detection-request";
import DetectionRequestHeader from "./detection-request-header";
import DetectionRequestLeftSection from "./detection-request-left-section";
import DetectionRequestRightSection from "./detection-request-right-section";

export default function DetectionRequestSection() {
  const [seletedId, setSelectedId] = useState<string | null>(null);
  const handleCard = (id: string) => {
    setSelectedId(id);
  };

  const { data, isLoading, fetchNextPage, hasNextPage, refetch } =
    useInfiniteQuery(
      ["detection-requests"],
      ({ pageParam = 0 }) => getDetectionRequest(pageParam),
      {
        getNextPageParam: (lastPage) => {
          if (lastPage.result.currentPageNumber >= lastPage.result.totalPages) {
            return undefined;
          }
          return lastPage.result.currentPageNumber + 1;
        },
      }
    );

  return (
    <div className="flex flex-grow w-full flex-1 h-screen bg-[#FAFAFA] z-10">
      <div className="flex-col flex mr-6">
        <DetectionRequestHeader />
        <DetectionRequestLeftSection
          seletedId={seletedId}
          handleCard={handleCard}
          data={data}
          isLoading={isLoading}
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
        />
      </div>
      {seletedId && (
        <DetectionRequestRightSection
          seletedId={seletedId}
          setSelectedId={setSelectedId}
          refetch={refetch}
        />
      )}
    </div>
  );
}
