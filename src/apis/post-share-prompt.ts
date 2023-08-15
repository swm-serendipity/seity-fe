import { axiosInstance } from "./axios-setting";

type SharePromptArgs = {
  promptSessionId: string;
  title: string;
  mentionMemberList: { memberId: string }[];
};

const postSharePrompt = async ({
  promptSessionId,
  title,
  mentionMemberList,
}: SharePromptArgs) => {
  const { data } = await axiosInstance.post("/post", {
    id: promptSessionId,
    title: title,
    mentionMemberList: mentionMemberList,
  });
  return data;
};

export default postSharePrompt;
