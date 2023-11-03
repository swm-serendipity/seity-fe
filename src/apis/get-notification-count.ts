import { axiosInstance } from "./axios-setting";

const getNotificationCount = async () => {
  const { data } = await axiosInstance.get("/calling/count");
  return data;
};

export default getNotificationCount;
