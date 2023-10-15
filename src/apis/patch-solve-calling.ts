import { axiosInstance } from "./axios-setting";

type patchSolveCallingArgs = {
  callingId: string;
};

const patchSolveCalling = async ({ callingId }: patchSolveCallingArgs) => {
  const { data } = await axiosInstance.patch(`/calling/solve?id=${callingId}`);
  return data;
};

export default patchSolveCalling;
