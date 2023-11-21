import Lottie from "lottie-react";
import loadingLottie from "@/components/assets/lottie/loading-animation.json";
import Pagination from "@/components/ui/posts/pagination";
import UserManagementHeader from "./user-management-header";
import { useEffect } from "react";
import UserManagementTable from "./user-management-table";
import { usePathname, useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import getMemberList from "@/apis/get-member-list";

export default function UserManagementSection() {
  const path = usePathname();
  const router = useRouter();
  const currentPage = Number(path.split(`user-management/`)[1]);

  useEffect(() => {
    if (!!Number(path.split(`user-management/`)[1])) {
    } else {
      router.replace(`/user-management/1`);
    }
  }, []);

  const { data, isLoading, refetch } = useQuery(
    ["user-list", { pageNumber: currentPage - 1, pageSize: 10 }],
    getMemberList
  );

  if (isLoading)
    return (
      <div className="bg-white w-full flex-1 h-full flex justify-center items-center">
        <Lottie animationData={loadingLottie} />
      </div>
    );

  return (
    <div className=" flex-grow w-full flex-1 h-screen bg-[#FAFAFA] z-10 overflow-y-auto">
      <UserManagementHeader
        totalMemberNumber={data?.result.totalMemberNumber}
      />
      <div className="w-[1000px] flex flex-col gap-10 mt-5 ml-12">
        <UserManagementTable users={data?.result.members} />
        <Pagination
          currentPage={currentPage}
          totalPages={data?.result.totalPages}
          url="/user-management/"
        />
      </div>
    </div>
  );
}
