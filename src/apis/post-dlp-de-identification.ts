import { axiosInstance } from "./axios-setting";

type DeIendificationData = {
  question: string;
};

const postDlpDeIendification = async ({ question }: DeIendificationData) => {
  const { data } = await axiosInstance.post("/dlp/de-identification", {
    question,
  });
  return data.result;
};

export default postDlpDeIendification;
