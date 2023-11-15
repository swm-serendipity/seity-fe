import { axiosInstance } from "./axios-setting";

type DeIendificationData = {
  question: string;
};

const postDlpDeIendification = async ({ question }: DeIendificationData) => {
  const { data } = await axiosInstance.post("/dlp/v2/de-identification", {
    question,
  });

  return data;
};

export default postDlpDeIendification;
