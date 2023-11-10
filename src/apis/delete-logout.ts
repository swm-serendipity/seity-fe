import { axiosInstance } from "./axios-setting";

type deleteLogoutArgs = {
  refreshToken: string;
};

const deleteLogout = async ({ refreshToken }: deleteLogoutArgs) => {
  const { data } = await axiosInstance.delete(
    `/user/logout?refreshToken=${refreshToken}`
  );
  return data;
};

export default deleteLogout;
