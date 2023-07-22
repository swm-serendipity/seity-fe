import { axiosInstance } from "./axios-setting";

type LoginData = {
  loginId: string;
  password: string;
};

const postLogin = async ({ loginId, password }: LoginData) => {
  const { data } = await axiosInstance.post("/login", {
    loginId,
    password,
  });
  return data;
};

export default postLogin;
