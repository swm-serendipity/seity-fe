import { axiosInstance } from "./axios-setting";

type GetSinglePromptArgs = {
  postId: string;
};

const getSingleSharedPrompt = async ({ postId }: GetSinglePromptArgs) => {
  const { data } = await axiosInstance.get(`/post?postId=${postId}`);
  return data;
};

export default getSingleSharedPrompt;
