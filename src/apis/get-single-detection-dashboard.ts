import { axiosInstance } from "./axios-setting";

type Args = {
  queryKey: [queryKey: string, id: string];
};

const getSingleDetectionDashboard = async ({ queryKey }: Args) => {
  const [, id] = queryKey;

  const { data } = await axiosInstance.get(`/detection/${id}`);
  return data;
};

export default getSingleDetectionDashboard;
