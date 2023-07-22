import { axiosInstance } from "./axios-setting";

type LoginData = {
  sessionId?: string;
  question: string;
};

const postPromptQuestion = async ({ question, sessionId = "" }: LoginData) => {
  const { data } = await axiosInstance.post("/prompt/ask", {
    sessionId,
    question,
  });
  return data;
};

export default postPromptQuestion;
