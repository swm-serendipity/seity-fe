import { axiosInstance } from "./axios-setting";

type deletePostArgs = {
  postId: string;
};

const deletePost = async ({ postId }: deletePostArgs) => {
  const { data } = await axiosInstance.delete(`/post?postId=${postId}`);
  return data;
};

export default deletePost;
