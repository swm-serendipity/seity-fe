import { axiosInstance } from "./axios-setting";

type deleteShareScrapArgs = {
  postId: string;
};

const deleteShareScrap = async ({ postId }: deleteShareScrapArgs) => {
  const { data } = await axiosInstance.delete(`/post/scrap?postId=${postId}`);
  return data;
};

export default deleteShareScrap;
