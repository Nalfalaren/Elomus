export interface IPayloadLogin {
  email: string;
  password: string;
}

export interface IResponseLogin {
  accessToken: string;
  refreshToken: string;
}
