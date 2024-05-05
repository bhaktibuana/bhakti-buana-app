import { I_BaseResponse } from "@/apis/types";

export interface I_PublicAPI {
  about_response: I_BaseResponse<{
    id: string;
    nick_name: string;
    role: string;
    email: string;
    summary: string;
    location: {
      city: string;
      province: string;
      country: string;
    };
    resume: {
      id: string;
      url: string;
    };
    photo: string;
    created_at: string;
  }>;
}
