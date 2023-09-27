import { axiosInstance } from "./axios-setting";

type DeleteDetectionDashboardArgs = {
  id: string;
};

const deleteDetectionDashboard = async ({
  id,
}: DeleteDetectionDashboardArgs) => {
  const { data } = await axiosInstance.delete(`/detection?id=${id}`);
  return data;
};

export default deleteDetectionDashboard;
