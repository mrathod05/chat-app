export const employeeEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const mobileNumberRegex = /^\d{10}$/;
export const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W)(?=.{8,})/;

export const emailOrPwdRegex = /^(\S+@\S+\.\S+|\d{10})$/;
