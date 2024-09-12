import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

import {
  IPayloadLogin,
  requestLogin,
  logout,
  IResponseLogin,
} from '@/services/auth';

import { UserLoginRequestError, UserLoginRequestSuccess } from './actions';
import { AuthActionTypes } from './types';
import { fetchProfileUser } from '../user/saga';

interface IActionLoginSuccess {
  type: string;
  payload: IResponseLogin;
}

interface IAction {
  type: string;
  payload: IPayloadLogin | string;
}

function* login(action: IAction): unknown {
  try {
    const payloadParam = action.payload as IPayloadLogin;
    const response = yield call(async () => requestLogin(payloadParam));
    if (response.success) {
      const { data } = response;
      yield put(UserLoginRequestSuccess(data));
    } else {
      yield put(UserLoginRequestError(response.message));
    }
  } catch (error: any) {
    return yield put(UserLoginRequestError(error?.data.message));
  }
}

function* processingUserLoginSuccess(action: IActionLoginSuccess): unknown {
  const currentUser = action.payload;
  window.localStorage.setItem('jwt', currentUser?.accessToken ?? '');
  window.localStorage.setItem('refresh_token', currentUser?.refreshToken ?? '');
  yield call(() => fetchProfileUser(true));
}

function* doLogout() {
  try {
    yield call(async () => logout());
    // window.localStorage.clear();
    yield put({ type: AuthActionTypes.USER_LOGOUT });
  } catch (e) {
    console.log('Error logging out', e);
  }
}

export const authSagas = [
  takeLatest(AuthActionTypes.REQUEST_LOGIN_USER, login),
  takeEvery(
    AuthActionTypes.REQUEST_LOGIN_USER_SUCCESS,
    processingUserLoginSuccess,
  ),
  takeEvery(AuthActionTypes.REQUEST_USER_LOGOUT, doLogout),
];
