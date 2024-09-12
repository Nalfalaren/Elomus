import { combineReducers } from 'redux';

import { authReducer } from './auth/reducers';
import { commonReducer } from './common/reducers';
import { userReducer } from './user/reducers';

const rootReducer = combineReducers({
  auth: authReducer,
  common: commonReducer,
  userProfile: userReducer,
});
export default rootReducer;
