import { axiosInstance } from "./axios-setting";

type SharePromptImportArgs = {
  postId: string;
};

const postSharePromptImport = async ({ postId }: SharePromptImportArgs) => {
  const { data } = await axiosInstance.post(`/post/import?postId=${postId}`);
  return data;
};

export default postSharePromptImport;
