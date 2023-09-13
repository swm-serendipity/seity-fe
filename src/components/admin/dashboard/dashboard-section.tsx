import { useState } from "react";
import DashboardHeader from "./dashboard-header";
import DashboardLeftSection from "./dashboard-left-section";
import DashboardRightSection from "./dashboard-right-section";

export default function DashboardSection() {
  const [seletedId, setSelectedId] = useState<string | null>(null);
  const handleCard = (id: string) => {
    setSelectedId(id);
  };

  return (
    <div className="flex flex-grow w-full flex-1 h-screen bg-[#FAFAFA] z-10">
      <div className="flex-col flex mr-6">
        <DashboardHeader />
        <DashboardLeftSection seletedId={seletedId} handleCard={handleCard} />
      </div>
      <DashboardRightSection seletedId={seletedId} />
    </div>
  );
}
