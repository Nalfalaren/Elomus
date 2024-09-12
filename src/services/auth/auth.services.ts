import { ApiHelper } from '@/utils';

import { IPayloadLogin, IResponseLogin } from './auth.interface';
import { IResponse } from '../common.services';

class AuthServiceRoute {
  static readonly LOGIN = '/auth/login';

  static readonly REFRESH_TOKEN_AUTH = '/auth/refresh-token';
}

export const requestLogin = async (params: IPayloadLogin) =>
  ApiHelper.post<IResponse<IResponseLogin>, IPayloadLogin>(
    AuthServiceRoute.LOGIN,
    params,
  );

export const requestRefreshToken = async (refreshToken: string) => {
  const bodyRequest = { token: refreshToken };
  return ApiHelper.post<IResponse<any>, typeof bodyRequest>(
    AuthServiceRoute.REFRESH_TOKEN_AUTH,
    bodyRequest,
  );
};

export const logout = async () => {
  window.localStorage.clear();
};
