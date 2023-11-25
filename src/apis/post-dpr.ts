import { axiosInstance } from "./axios-setting";

type DprArgs = {
  question: string;
};

const postDpr = async ({ question }: DprArgs) => {
  const { data } = await axiosInstance.post("/dpr", {
    question,
  });
  return data;
};

export default postDpr;
