import { axiosInstance } from "./axios-setting";

const getLoginInfo = async () => {
  const { data } = await axiosInstance.get("/login/info");
  return data.result;
};

export default getLoginInfo;
