import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

import { API_CONFIGS } from "@/configs";

type T_URLType = "bhakti_buana";

interface I_URL {
  bhakti_buana: string;
}

const url: I_URL = {
  bhakti_buana: API_CONFIGS.BHAKTI_BUANA_API,
};

const globalResponseHandler = (response: AxiosResponse) => response;

const globalErrorHandler = (error: AxiosError) => Promise.reject(error);

const clientConfig = (urlType: T_URLType = "bhakti_buana"): AxiosInstance =>
  axios.create({ baseURL: url[urlType] });

export const client = (urlType: T_URLType = "bhakti_buana") => {
  const axiosClient = clientConfig(urlType);
  axiosClient.interceptors.response.use(
    globalResponseHandler,
    globalErrorHandler
  );
  return axiosClient;
};
