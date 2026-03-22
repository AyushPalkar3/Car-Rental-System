import axios from "axios";
import { getAccessToken } from "../../../../utils/auth.utils";

const API_URL = null


const isDev = import.meta.env.MODE === "development";

const axiosClient = axios.create({
  baseURL: isDev
    ? import.meta.env.VITE_API_BASE_URL
    : import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use(
  (config) => {
    const token = getAccessToken("carPartnerAccessToken"); 
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
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

export { carPartnerAccountAPI } from "./carPartnerAccount.api";
export type {
  CarPartnerProfile,
  UpdateCarPartnerProfilePayload,
  ChangePasswordPayload,
  ApiErrorBody,
} from "./carPartnerAccount.api"; 