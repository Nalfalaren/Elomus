import { all } from 'redux-saga/effects';

import { authSagas } from './auth/saga';
import { userSaga } from './user/saga';

export default function* rootSaga(): any {
  return yield all([...userSaga, ...authSagas]);
}
