import { axiosInstance } from "./axios-setting";

type deleteForbiddenWordArgs = {
  wordId: string;
};

const deleteForbiddenWord = async ({ wordId }: deleteForbiddenWordArgs) => {
  const { data } = await axiosInstance.delete(`/forbidden-word?id=${wordId}`);
  return data;
};

export default deleteForbiddenWord;
