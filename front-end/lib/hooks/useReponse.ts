import { Http_Status } from "../api-handler/constants";
import Notification, { TOAST } from "../notification";
import {
  TypeApiResponse,
  TypeHandleResponse,
  TypeResponse,
} from "./../api-handler/types";

const useResponse = (): TypeHandleResponse => {
  const handleResponse = (args: TypeResponse): void => {
    if (args) {
      handleNotification(args);
    }
  };

  const handleNotification = (response: TypeApiResponse): void => {
    const { success, code } = response;
    let { message } = response;

    if (code === Http_Status.INTERNAL_SERVER) {
      message = "SOMETHING_WENT_WRONG";
    }

    if (message) {
      Notification({
        type: success ? TOAST.SUCCESS : TOAST.ERROR,
        message,
      });
    }

    if (code === Http_Status.UNAUTHORIZED) {
      // Add logout method
    }
  };

  return { handleResponse };
};
export default useResponse;
