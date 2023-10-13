import { axiosInstance } from "./axios-setting";

const getCallingNotification = async (pageNumber = 0) => {
  const { data } = await axiosInstance.get(`/calling/admin/history`, {
    params: {
      pageNumber: pageNumber,
      pageSize: 10,
    },
  });
  return data;
};

export default getCallingNotification;
