import getLoginInfo from "@/apis/get-login-info";
import { useQuery } from "@tanstack/react-query";

export default function SideBarProfile() {
  const { data, isFetched, isLoading } = useQuery(["user-info"], () =>
    getLoginInfo()
  );

  return (
    <div className="flex gap-2.5 ml-5 mt-16">
      <div className="rounded-full bg-yellow-400 w-[44px] h-[44px] text-h3 flex justify-center items-center">
        {isFetched && data?.name ? data.name[0] : "A"}
      </div>
      <div>
        <p className="text-h4 text-blackbg-default">
          {isFetched && data?.name ? data.name : "사용자"}
        </p>
        <p className="text-body-small text-blackbg-info">
          {isFetched && data?.email ? data.email : "email@mail.com"}
        </p>
      </div>
    </div>
  );
}
