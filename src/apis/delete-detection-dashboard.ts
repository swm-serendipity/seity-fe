import { axiosInstance } from "./axios-setting";

type deleteDetectionDashboardArgs = {
  id: string;
};

const deleteDetectionDashboard = async ({
  id,
}: deleteDetectionDashboardArgs) => {
  const { data } = await axiosInstance.delete(`/detection?id=${id}`);
  return data;
};

export default deleteDetectionDashboard;
