import { axiosInstance } from "./axios-setting";

const getCallingAdminHistory = async (pageNumber = 0) => {
  const { data } = await axiosInstance.get(`/calling/admin/history`, {
    params: {
      pageNumber: pageNumber,
      pageSize: 10,
    },
  });
  return data;
};

export default getCallingAdminHistory;
