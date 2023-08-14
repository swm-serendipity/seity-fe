import { axiosInstance } from "./axios-setting";

type Args = {
  queryKey: [queryKey: string, args: { size: number }];
};

const getAllHotPrompt = async ({ queryKey }: Args) => {
  const [, { size = 0 }] = queryKey;

  const { data } = await axiosInstance.get(`/post/feed/top/all?size=${size}`);
  return data;
};

export default getAllHotPrompt;
