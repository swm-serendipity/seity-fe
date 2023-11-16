import { axiosInstance } from "./axios-setting";

const getForbiddenWord = async () => {
  const { data } = await axiosInstance.get("/forbidden-word");
  return data;
};

export default getForbiddenWord;
