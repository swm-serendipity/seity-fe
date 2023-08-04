import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.seity.co.kr",
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = localStorage.getItem("refreshToken");
      try {
        const res = await axios.get("https://api.seity.co.kr/auth/reissue", {
          headers: {
            Authorization: `Bearer ${refreshToken}`,
          },
        });
        localStorage.setItem("accessToken", res.data.result.accessToken);
        localStorage.setItem("refreshToken", res.data.result.refreshToken);

        originalRequest.headers[
          "Authorization"
        ] = `Bearer ${res.data.result.accessToken}`;
        return axiosInstance(originalRequest);
      } catch (err) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
      }
    }
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
