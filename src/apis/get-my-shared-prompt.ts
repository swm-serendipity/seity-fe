import { axiosInstance } from "./axios-setting";

type Args = {
  queryKey: [queryKey: string, args: { pageNumber: number; pageSize: number }];
};

const getMySharedPrompt = async ({ queryKey }: Args) => {
  const [, { pageNumber = 0, pageSize = 0 }] = queryKey;
  const { data } = await axiosInstance.get(
    `/post/myinfo/postList?pageNumber=${pageNumber}&pageSize=${pageSize}`
  );
  return data;
};

export default getMySharedPrompt;
