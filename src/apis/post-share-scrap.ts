import { axiosInstance } from "./axios-setting";

type postShareScarpArgs = {
  postId: string;
};

const postShareScrap = async ({ postId }: postShareScarpArgs) => {
  const { data } = await axiosInstance.post(`/post/scrap?postId=${postId}`);
  return data;
};

export default postShareScrap;
