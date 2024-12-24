import React, { JSX } from "react";
import { ToastContainer } from "react-toastify";

const Toast = (): JSX.Element => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={1000}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      pauseOnHover
      theme="light"
      limit={1}
    />
  );
};

export default Toast;
