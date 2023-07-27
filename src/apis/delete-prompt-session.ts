import { axiosInstance } from "./axios-setting";

const deletePromptSession = async ({ sessionId }: { sessionId: string }) => {
  const { data } = await axiosInstance.delete(`/prompt?sessionId=${sessionId}`);
  return data;
};

export default deletePromptSession;
