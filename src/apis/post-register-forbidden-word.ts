import { axiosInstance } from "./axios-setting";

type postRegisterForbiddenWordArgs = {
  word: string;
};

const postRegisterForbiddenWord = async ({
  word,
}: postRegisterForbiddenWordArgs) => {
  const { data } = await axiosInstance.post("/forbidden-word", {
    value: word,
  });
  return data;
};

export default postRegisterForbiddenWord;
