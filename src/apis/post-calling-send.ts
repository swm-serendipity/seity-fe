import { axiosInstance } from "./axios-setting";

type CallingData = {
  id: string;
  content: string;
};

const postCallingSend = async ({ id, content }: CallingData) => {
  const { data } = await axiosInstance.post("/calling/send", {
    id,
    content,
  });
  return data;
};

export default postCallingSend;
