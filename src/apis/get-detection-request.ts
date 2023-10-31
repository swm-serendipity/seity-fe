import { axiosInstance } from "./axios-setting";

const getDetectionRequest = async (pageNumber = 0) => {
  const { data } = await axiosInstance.get(`/detection`, {
    params: {
      pageNumber: pageNumber,
      pageSize: 10,
    },
  });
  return data;
};

export default getDetectionRequest;
