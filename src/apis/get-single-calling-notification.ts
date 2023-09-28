import { axiosInstance } from "./axios-setting";

type Args = {
  queryKey: [queryKey: string, id: string];
};

const getSingleCallingNotification = async ({ queryKey }: Args) => {
  const { data } = await axiosInstance.get(`/calling`, {
    params: { id: queryKey[1] },
  });
  return data;
};

export default getSingleCallingNotification;
