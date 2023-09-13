import { axiosInstance } from "./axios-setting";

const getDetectionDashboard = async (pageNumber = 0) => {
  const { data } = await axiosInstance.get(`/detection`, {
    params: {
      pageNumber: pageNumber,
      pageSize: 10,
    },
  });
  return data;
};

export default getDetectionDashboard;
