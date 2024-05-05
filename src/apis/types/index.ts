export interface I_BaseResponse<T = any> {
  message: string;
  status: boolean;
  data: T;
}
