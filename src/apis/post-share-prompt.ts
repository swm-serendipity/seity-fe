import { axiosInstance } from "./axios-setting";

type SharePromptArgs = {
  promptSessionId: string;
};

const postSharePrompt = async ({ promptSessionId }: SharePromptArgs) => {
  const { data } = await axiosInstance.post(
    `/post?sessionId=${promptSessionId}`
  );
  return data;
};

export default postSharePrompt;
