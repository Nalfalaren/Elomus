import { TUserProfileState } from './actions';
import { TRootState } from '../index';

export const UserProfileState = (state: TRootState): TUserProfileState =>
  state.userProfile.profile;
export const UserProfileError = (state: TRootState): any =>
  state.userProfile.error;
