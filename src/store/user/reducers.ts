import { produce } from 'immer';
import { handleActions } from 'redux-actions';

import { TUserProfileFullState, initProfileFullState } from './actions';
import { UserActionTypes } from './types';

export const userReducer = handleActions<TUserProfileFullState, any>(
  {
    [UserActionTypes.REQUEST_USER_PROFILE]: (state) => ({
      ...state,
      is_loading: true,
    }),

    [UserActionTypes.REQUEST_USER_PROFILE_SUCCESS]: (state, action) =>
      produce(state, (draft) => {
        draft.is_loading = false;
        draft.profile = action.payload;
      }),
    [UserActionTypes.REQUEST_USER_PROFILE_ERROR]: (state, action) => ({
      ...state,
      is_loading: false,
      error: action.payload,
    }),
  },
  initProfileFullState,
);
