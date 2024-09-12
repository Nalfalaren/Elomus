import { TNotification } from './types';
import { TRootState } from '../index';

export const NotificationState = (state: TRootState): TNotification =>
  state.common.notification;
