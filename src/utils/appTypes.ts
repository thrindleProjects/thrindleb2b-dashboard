// INPUT TYPES START
export type InputPasswordType = 'password';
export type InputTextType = 'text';
export type InputEmailType = 'email';
export type InputDateType = 'date';
export type InputFileType = 'file';
export type InputSelectType = 'select';
// INPUT TYPES END

// GENERAL RESPONSE STRUCTURE TYPE START
export interface INetworkSuccessResponse<T> {
  data: T;
  message: string;
  status?: string;
  success?: boolean;
}
// GENERAL RESPONSE STRUCTURE TYPE END
