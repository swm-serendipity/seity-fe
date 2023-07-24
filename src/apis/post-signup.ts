import { axiosInstance } from "./axios-setting";

type SignupArgs = {
  args: {
    loginId: string;
    password: string;
    name: string;
    email: string;
    birthDate: string;
    memberRole: string;
    part: string;
  };
};

const postSignUp = async ({ args }: SignupArgs) => {
  const { data } = await axiosInstance.post("/signup", args);
  return data;
};

export default postSignUp;
