import { v4 as uuidv4 } from "uuid";

type DeIdentificationData = {
  originalQuestion: string;
  convertedQuestion: string;
  result: {
    index: number;
    length: number;
  }[];
};

const changeDeIdentificationState = (data: DeIdentificationData) => {
  let currentIndex = 0;
  const newData = data.result.flatMap((item: any, index: number) => {
    const result = [];

    if (item.index > currentIndex) {
      result.push({
        id: uuidv4(),
        text: data.originalQuestion.substring(currentIndex, item.index),
        deIdentificateData: "",
        type: "일반텍스트",
        changed: false,
      });
    }

    result.push({
      id: uuidv4(),
      text: data.originalQuestion.substr(item.index, item.length),
      deIdentificateData: data.convertedQuestion.substr(
        item.index,
        item.length
      ),
      type: "개인정보",
      changed: false,
    });

    currentIndex = item.index + item.length;

    return result;
  });

  if (currentIndex < data.originalQuestion.length) {
    newData.push({
      id: uuidv4(),
      text: data.originalQuestion.substring(currentIndex),
      deIdentificateData: "",
      type: "일반텍스트",
      changed: false,
    });
  }
  return newData;
};

export default changeDeIdentificationState;
