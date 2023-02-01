import axios, {
  AxiosRequestConfig,
  AxiosStatic,
  CancelTokenStatic,
} from "axios";
import { getLanguage } from "../utils/helper";
import "./interceptor";

const lang = getLanguage();

const DEFAULT_HEADERS = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "X-Requested-With": "application/json",
  "Accept-Language": lang
};

const DEFAULT_HEADER = {
  Accept: "application/json",
  "X-Requested-With": "application/json",
};

export interface RequestParams {
  [key: string]: string | number | null | undefined | boolean;
}

export interface RequestBody {
  [key: string]:
    | string
    | number
    | boolean
    | Record<string, unknown>
    | null
    | undefined;
}

class HttpRequest {
  private readonly headers: {
    [key: string]: string;
  };

  private readonly header: {
    [key: string]: string;
  };

  protected apiUrl: string;
  private readonly axios: AxiosStatic;
  private cancelToken: CancelTokenStatic;

  constructor() {
    this.headers = DEFAULT_HEADERS;
    this.header = DEFAULT_HEADER;
    this.apiUrl = "";
    this.axios = axios;
    this.cancelToken = axios.CancelToken;
  }

  getURL(path: string) {
    return `${this.apiUrl}${path}`;
  }

  get(path: string, params?: RequestParams, config?: AxiosRequestConfig) {
    const requestUrl = this.getURL(path);
    const requestConfig: AxiosRequestConfig = {
      params,
      headers: this.headers,
      ...config,
    };
    return this.axios.get(requestUrl, requestConfig);
  }

  post(path: string, data?: RequestBody, config?: AxiosRequestConfig) {
    const requestUrl = this.getURL(path);
    const requestConfig: AxiosRequestConfig = {
      headers: this.headers,
      ...config,
    };

    return this.axios.post(requestUrl, data, requestConfig);
  }

  put(path: string, data?: any, config?: AxiosRequestConfig) {
    const requestUrl = this.getURL(path);
    const requestConfig: AxiosRequestConfig = {
      headers: this.headers,
      ...config,
    };

    return this.axios.put(requestUrl, data, requestConfig);
  }

  delete(path: string, params?: RequestParams, config?: AxiosRequestConfig) {
    const requestUrl = this.getURL(path);
    const requestConfig: AxiosRequestConfig = {
      params,
      headers: this.headers,
      ...config,
    };

    return this.axios.delete(requestUrl, requestConfig);
  }

  upload(path: string, data?: RequestBody, config?: AxiosRequestConfig) {
    const requestUrl = this.getURL(path);
    const requestConfig: AxiosRequestConfig = {
      headers: this.header,
      ...config,
    };
    return this.axios.post(requestUrl, data, requestConfig);
  }
}

export default HttpRequest;
