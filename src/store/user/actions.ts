import { createAction } from 'redux-actions';

import { UserActionTypes } from './types';

const initProfileState = {
  email: '',
  name: '',
  id: 0,
};

export const initProfileFullState = {
  profile: initProfileState,
  is_loading: false,
  logged_in: false,
  error: null,
};

export const RequestUserProfile = createAction(
  UserActionTypes.REQUEST_USER_PROFILE,
);

export const UserProfileRequestSuccess = createAction(
  UserActionTypes.REQUEST_USER_PROFILE_SUCCESS,
);

export const UserProfileRequestError = createAction(
  UserActionTypes.REQUEST_USER_PROFILE_ERROR,
);

export type TUserProfileState = typeof initProfileState;
export type TUserProfileFullState = typeof initProfileFullState;
