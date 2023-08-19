import axios from "axios";
import { movieBaseUrl, token } from "./api-constants";

const axiosInstance = axios.create({
  baseURL: movieBaseUrl,
});

axiosInstance.interceptors.request.use(
  (request) => {
    if (token) {
      request.headers.Authorization = "Bearer " + token;
    }
    return request;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default axiosInstance;
