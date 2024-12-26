import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export enum TOAST {
  SUCCESS = "success",
  ERROR = "error",
  WARNING = "warning",
  INFO = "default",
}

type TypeNotificationProps = {
  type: TOAST;
  message: string;
};

const Notification = ({ type, message }: TypeNotificationProps): boolean => {
  const notificationTypes = {
    success: toast.success,
    warning: toast.warning,
    error: toast.error,
    default: toast.info,
  };

  const notify = notificationTypes[type] || notificationTypes.default;
  notify(message);

  return true;
};

export default Notification;
