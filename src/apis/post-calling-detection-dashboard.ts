import { axiosInstance } from "./axios-setting";

type PostCallingDetectionDashboardArgs = {
  promptDetectionId: string;
};

const postCallingDetectionDashboard = async ({
  promptDetectionId,
}: PostCallingDetectionDashboardArgs) => {
  const { data } = await axiosInstance.post("/calling", {
    promptDetectionId,
  });
  return data;
};

export default postCallingDetectionDashboard;
