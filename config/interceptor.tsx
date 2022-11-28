import axios from "axios";
import { getAuthToken, removeAuth } from "../utils/helper";

axios.interceptors.request.use(
  (config) => {
    const accessToken = getAuthToken();

    if (accessToken) {
      const headers = {
        Authorization: `Bearer ${accessToken}`,
      };

      config.headers = Object.assign(config.headers, headers);
    }

    return config;
  },
  (error) => Promise.reject(error)
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const statusCode = error.response && error.response.status;
    switch (Number(statusCode)) {
      case 401:
        removeAuth();
        break;
      default:
        break;
    }
    return Promise.reject(error);
  }
);
