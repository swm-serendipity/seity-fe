import MessageManagementHeader from "./message-management-header";
import MessageManagementLeftSection from "./message-management-left-section";
import MessageManagementRightSection from "./message-management-right-section";

export default function MessageManagementSection() {
  return (
    <div className=" flex-grow w-full flex-1 h-screen bg-[#FAFAFA] z-10 overflow-y-auto">
      <MessageManagementHeader />
      <div className="flex ml-12 mt-8 mb-10 gap-5">
        <MessageManagementLeftSection />
        <MessageManagementRightSection />
      </div>
    </div>
  );
}
