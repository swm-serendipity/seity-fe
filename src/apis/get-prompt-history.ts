import { axiosInstance } from "./axios-setting";

const getPromptHistory = async ({ pageParam = 0 }) => {
  const { data } = await axiosInstance.get(
    `/prompt/history?pageNumber=${pageParam}&pageSize=10`
  );
  return data;
};

export default getPromptHistory;
