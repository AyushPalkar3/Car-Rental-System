import axios from "axios";
import { getAccessToken } from "../../../../utils/auth.utils";

const isDev = import.meta.env.MODE === "development";

const axiosClient = axios.create({
  baseURL: isDev
    ? import.meta.env.VITE_API_BASE_URL
    : import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  headers: {},
});

axiosClient.interceptors.request.use(
  (config) => {
    const token = getAccessToken("adminAccessToken"); 
    console.log(token, "token")
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Allow browser/axios to set correct Content-Type for FormData (incl. boundary)
    const isFormData =
      typeof FormData !== "undefined" && config.data instanceof FormData;
    if (isFormData) {
      try {
        (config.headers as any)?.delete?.("Content-Type");
      } catch {
        // ignore
      }
      if (config.headers) {
        delete (config.headers as any)["Content-Type"];
      }
    } else {
      if (config.headers && !(config.headers as any)["Content-Type"]) {
        (config.headers as any)["Content-Type"] = "application/json";
      }
    }

    return config;
  },
  (error) => Promise.reject(error)
);


axiosClient.interceptors.response.use(
  (response) => response, 
  (error) => {
    if (error.response) {
      console.error("API Error:", error.response.data);
      return Promise.reject(error.response.data);
    }
    return Promise.reject(error.message);
  }
);

export default axiosClient; 