import { axiosInstance } from "./axios-setting";

const getLoginTest = async () => {
  const { data } = await axiosInstance.get("/login/test");
  return data;
};

export default getLoginTest;
