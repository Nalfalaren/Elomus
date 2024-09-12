import { createAction } from 'redux-actions';

import {
  TCommon,
  CommonTypes,
  TNotification,
  NotificationTypeEnum,
} from './types';

export const initialCommon: TCommon = {
  notification: {
    type: NotificationTypeEnum.error,
    open: false,
    content: '',
  },
};

export const commonCreateNotification = createAction<TNotification>(
  CommonTypes.COMMON_CREATE_NOTIFY,
);
export const notifySuccess = createAction<any>(
  CommonTypes.COMMON_NOTIFY_SUCCESS,
);
export const notifyError = createAction<any>(CommonTypes.COMMON_NOTIFY_ERROR);

export const closeNotify = createAction(CommonTypes.COMMON_CLOSE_NOTIFY);
