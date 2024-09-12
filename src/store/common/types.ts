export enum CommonTypes {
  COMMON_CREATE_NOTIFY = '@common/COMMON_CREATE_NOTIFY',
  COMMON_NOTIFY_SUCCESS = '@common/COMMON_NOTIFY_SUCCESS',
  COMMON_NOTIFY_ERROR = '@common/COMMON_NOTIFY_ERROR',
  COMMON_CLOSE_NOTIFY = '@common/COMMON_CLOSE_NOTIFY',
}
export interface TCommon {
  notification: TNotification;
}
export type TNotification = {
  type: NotificationTypeEnum;
  open?: boolean;
  content: string;
  duration?: number;
};
export enum NotificationTypeEnum {
  error = 'error',
  warning = 'warning',
  info = 'info',
  success = 'success',
}
