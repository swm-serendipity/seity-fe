import { axiosInstance } from "./axios-setting";

type deleteShareLikeArgs = {
  postId: string;
};

const deleteShareLike = async ({ postId }: deleteShareLikeArgs) => {
  const { data } = await axiosInstance.delete(`/post/like?postId=${postId}`);
  return data;
};

export default deleteShareLike;
