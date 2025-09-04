import axios, {
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from "axios";
import { toast } from 'react-toastify';

// const axiosServices = axios.create({
//   baseURL: "https://serverinfinite.shoppingsto.com",
// });
const axiosServices = axios.create({
  baseURL:`${import.meta.env.VITE_REACT_APP_API_URL}`,
});

axiosServices.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const accessToken = localStorage.getItem("token");
    if (accessToken) {
      config.headers.set("Authorization", `Bearer ${accessToken}`);
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

axiosServices.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    if (
      error.response &&
      error.response.data &&
      (error.response.data as any).message
    ) {
      toast.error(
        (error.response.data as any).message ||
        (error.response.data as any).error ||
        "An error occurred"
      );
    }
    if (
      error.response &&
      error.response.status === 401 &&
      !window.location.href.includes("/")
    ) {
      localStorage.removeItem("serviceToken");
      window.location.pathname = "/";
    }
    return Promise.reject(error);
  }
);

export default axiosServices;