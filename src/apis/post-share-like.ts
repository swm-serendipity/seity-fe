import { axiosInstance } from "./axios-setting";

type postShareLikeArgs = {
  postId: string;
};

const postShareLike = async ({ postId }: postShareLikeArgs) => {
  const { data } = await axiosInstance.post(`/post/like?postId=${postId}`);
  return data;
};

export default postShareLike;
