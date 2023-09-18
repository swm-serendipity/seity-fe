import Pagination from "@/components/ui/posts/pagination";
import UserManagementHeader from "./user-management-header";
import { useState } from "react";
import UserManagementTable from "./user-management-table";

export default function UserManagementSection() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className=" flex-grow w-full flex-1 h-screen bg-[#FAFAFA] z-10">
      <UserManagementHeader />
      <div className="w-[1000px] flex flex-col gap-10 mt-5 ml-12">
        <UserManagementTable />
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={10}
        />
      </div>
    </div>
  );
}
