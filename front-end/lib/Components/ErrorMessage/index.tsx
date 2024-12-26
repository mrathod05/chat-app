import React, { JSX } from "react";
type Props = {
  message?: string;
  className?: string;
};

export const ErrorMessage = ({ message, className }: Props): JSX.Element => {
  return (
    <div
      className={`text-xs text-red-600 font-medium mt-1.5 ${className || ""}`}
    >
      {message}
    </div>
  );
};
