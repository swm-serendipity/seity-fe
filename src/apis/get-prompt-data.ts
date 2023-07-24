import { axiosInstance } from "./axios-setting";

type GetPromptDataArgs = {
  sessionId: string;
};

const getPromptData = async ({ sessionId }: GetPromptDataArgs) => {
  const { data } = await axiosInstance.get(`/prompt?sessionId=${sessionId}`);
  return data;
};

export default getPromptData;
