import { AxiosResponse } from "axios";

import { client } from "@/helpers/functions/httpClient";

import { I_PublicAPI } from "@/apis/types/public/index";

const basePath = "/api";

const showAbout = async (): Promise<
  AxiosResponse<I_PublicAPI["about_response"]>
> => {
  const url = `${basePath}/about/show-public`;
  return client().get(url);
};

export const API_PUBLIC = {
  showAbout,
};
