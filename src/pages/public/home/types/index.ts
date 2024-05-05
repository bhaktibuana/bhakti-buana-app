import { I_PublicAPI } from "@/apis/types/public";

export interface I_AboutData {
  loading: boolean;
  finished: boolean;
  querySuccess: boolean;
  data: I_PublicAPI["about_response"]["data"];
}
