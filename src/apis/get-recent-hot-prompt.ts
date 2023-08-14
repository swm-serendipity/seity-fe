import { axiosInstance } from "./axios-setting";

type Args = {
  queryKey: [queryKey: string, args: { size: number }];
};

const getRecentHotPrompt = async ({ queryKey }: Args) => {
  const [, { size = 0 }] = queryKey;

  const { data } = await axiosInstance.get(`/post/feed/top?size=${size}`);
  return data;
};

export default getRecentHotPrompt;
