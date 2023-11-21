import { axiosInstance } from "./axios-setting";

type Args = {
  queryKey: [queryKey: string, args: { pageNumber: number; pageSize: number }];
};

const getMemberList = async ({ queryKey }: Args) => {
  const [, { pageNumber = 0, pageSize = 0 }] = queryKey;
  const { data } = await axiosInstance.get(
    `/admin/member/management?pageNumber=${pageNumber}&pageSize=${pageSize}`
  );

  return data;
};

export default getMemberList;
