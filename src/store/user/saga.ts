import { put, call, takeLatest } from 'redux-saga/effects';

import { UserProfileRequestSuccess, UserProfileRequestError } from './actions';
import { UserActionTypes } from './types';
import { requestUserProfile } from '../../services/user';

export function* fetchProfileUser(isLogin?: boolean): any {
  const responseProfile = yield call(async () => requestUserProfile());
  if (responseProfile?.data) {
    yield put(UserProfileRequestSuccess(responseProfile.data));
    if (isLogin) {
      window.location.href = '/';
    }
  } else {
    yield put(UserProfileRequestError(responseProfile));
  }
}
export const userSaga = [
  takeLatest(UserActionTypes.REQUEST_USER_PROFILE, fetchProfileUser),
];
