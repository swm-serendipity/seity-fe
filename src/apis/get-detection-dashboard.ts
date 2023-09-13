import { axiosInstance } from "./axios-setting";

const getDetectionDashboard = async () => {
  const { data } = await axiosInstance.get(`/detection`);
  return data;
};

export default getDetectionDashboard;
