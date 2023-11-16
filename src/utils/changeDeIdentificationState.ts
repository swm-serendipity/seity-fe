import { v4 as uuidv4 } from "uuid";

type DeIdentificationData = {
  originalQuestion: string;
  convertedQuestion: string;
  result: {
    index: number;
    length: number;
    entity: string;
    original_data: string;
    converted_data: string;
  }[];
};

const changeDeIdentificationState = (data: DeIdentificationData) => {
  let currentIndex = 0;
  const newData = data.result
    .sort((a, b) => a.index - b.index)
    .flatMap((item: any, index: number) => {
      const result = [];

      if (item.index > currentIndex) {
        result.push({
          id: uuidv4(),
          text: data.convertedQuestion.substring(currentIndex, item.index),
          deIdentificateData: "",
          originalData: "",
          type: "일반텍스트",
          changed: false,
          entity: "",
          startIndex: item.index,
        });
      }

      result.push({
        id: uuidv4(),
        text: data.convertedQuestion.substr(item.index, item.length),
        originalData: item.original_data,
        deIdentificateData: item.converted_data,
        type: item.entity == "DENY_LIST" ? "금칙어" : "개인정보",
        changed: false,
        entity: item.entity,
        startIndex: item.index,
      });

      currentIndex = item.index + item.length;

      return result;
    });

  if (currentIndex < data.convertedQuestion.length) {
    newData.push({
      id: uuidv4(),
      text: data.convertedQuestion.substring(currentIndex),
      deIdentificateData: "",
      originalData: "",
      type: "일반텍스트",
      changed: false,
      entity: "",
      startIndex: currentIndex,
    });
  }
  return newData;
};

export default changeDeIdentificationState;
