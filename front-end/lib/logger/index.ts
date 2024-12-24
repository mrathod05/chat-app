/* eslint-disable @typescript-eslint/no-explicit-any,no-console */

export const Logger = {
  log: (...arg: any): void => console.log(...arg),
  error: ({
    message = "SOMETHING_WENT_WRONG",
    state,
    error,
  }: {
    message: string;
    state?: any;
    error?: any;
  }): void => {
    console.log({ message: message, state, error });
  },
};
