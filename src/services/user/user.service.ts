import { ApiHelper } from '@/utils';

import { IUser } from './user.interface';
import { IQueryParam, IResponse } from '../common.services';

class UserServiceRoute {
  static readonly PROFILE = 'profile';
}

export const requestUserProfile = async (query?: IQueryParam[]) =>
  ApiHelper.get<IResponse<IUser>>(UserServiceRoute.PROFILE, undefined, query);
