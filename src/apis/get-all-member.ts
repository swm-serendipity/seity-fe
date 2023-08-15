import { axiosInstance } from "./axios-setting";

const getAllMember = async () => {
  const { data } = await axiosInstance.get("/member/role/user");
  return data.result;
};

export default getAllMember;
