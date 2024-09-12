import { produce } from 'immer';
import { handleActions } from 'redux-actions';

import { initialCommon } from './actions';
import { TCommon, CommonTypes, NotificationTypeEnum } from './types';

const defaultDuration = 2000;

export const commonReducer = handleActions<TCommon, any>(
  {
    [CommonTypes.COMMON_CREATE_NOTIFY]: (state, action) =>
      produce(state, (draft) => {
        draft.notification = { ...action.payload };
        draft.notification.open = true;
      }),
    [CommonTypes.COMMON_NOTIFY_SUCCESS]: (state, action) =>
      produce(state, (draft) => {
        draft.notification = { ...action.payload };
        draft.notification.open = true;
        draft.notification.duration =
          action.payload.duration ?? defaultDuration;
        draft.notification.type = NotificationTypeEnum.success;
      }),
    [CommonTypes.COMMON_NOTIFY_ERROR]: (state, action) =>
      produce(state, (draft) => {
        draft.notification = { ...action.payload };
        draft.notification.open = true;
        draft.notification.duration =
          action.payload.duration ?? defaultDuration;
        draft.notification.type = NotificationTypeEnum.error;
      }),
    [CommonTypes.COMMON_CLOSE_NOTIFY]: (state) =>
      produce(state, (draft) => {
        draft.notification.open = false;
        draft.notification.type = NotificationTypeEnum.error;
        delete draft.notification.duration;
      }),
  },
  initialCommon,
);
