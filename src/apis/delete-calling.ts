import { axiosInstance } from "./axios-setting";

type deleteCallingArgs = {
  callingId: string;
};

const deleteCalling = async ({ callingId }: deleteCallingArgs) => {
  const { data } = await axiosInstance.delete(`/calling?id=${callingId}`);
  return data;
};

export default deleteCalling;
