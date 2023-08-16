import axios from "axios";

type DeIendificationData = {
  question: string;
};

const postDlpDeIendification = async ({ question }: DeIendificationData) => {
  const { data } = await axios.post("https://dlp.seity.co.kr/anonymize", {
    question,
  });
  return data;
};

export default postDlpDeIendification;
