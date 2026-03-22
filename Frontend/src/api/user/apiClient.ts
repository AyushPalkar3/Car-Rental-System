import axios from "axios";
import { getAccessToken } from "../../utils/auth.utils";

const isDev = import.meta.env.MODE === "development";

const axiosClient = axios.create({
    baseURL: isDev
        ? import.meta.env.VITE_API_BASE_URL
        : import.meta.env.VITE_API_BASE_URL,
    timeout: 10000,
    headers: {},
});

axiosClient.interceptors.request.use(
    config => {
        const token = getAccessToken("accessToken");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        // Allow browser/axios to set correct Content-Type for FormData (incl. boundary)
        const isFormData =
            typeof FormData !== "undefined" && config.data instanceof FormData;
        if (isFormData) {
            try {
                // AxiosHeaders supports delete, plain objects support delete as well
                (config.headers as any)?.delete?.("Content-Type");
            } catch {
                // ignore
            }
            if (config.headers) {
                delete (config.headers as any)["Content-Type"];
            }
        } else {
            // Default to JSON for non-FormData requests
            if (config.headers && !(config.headers as any)["Content-Type"]) {
                (config.headers as any)["Content-Type"] = "application/json";
            }
        }
        return config;
    },
    error => Promise.reject(error),
);

axiosClient.interceptors.response.use(
    response => response,
    error => {
        if (error.response) {
            console.error("API Error:", error.response.data);
            return Promise.reject(error.response.data);
        }
        return Promise.reject(error.message);
    },
);

export default axiosClient;
