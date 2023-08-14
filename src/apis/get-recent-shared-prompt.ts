import { axiosInstance } from "./axios-setting";

type Args = {
  queryKey: [queryKey: string, args: { pageNumber: number; pageSize: number }];
};

const getRecentSharedPrompt = async ({ queryKey }: Args) => {
  const [, { pageNumber = 0, pageSize = 0 }] = queryKey;
  const { data } = await axiosInstance.get(
    `/post/feed?pageNumber=${pageNumber}&pageSize=${pageSize}`
  );
  return data;
};

export default getRecentSharedPrompt;
