import { axiosInstance } from "./axios-setting";

type PostCallingDetectionDashboardArgs = {
  callingId: string;
};

const getAdminSingleHistory = async ({
  callingId,
}: PostCallingDetectionDashboardArgs) => {
  const { data } = await axiosInstance.get(
    `/calling/admin/history/${callingId}`
  );
  return data;
};

export default getAdminSingleHistory;
