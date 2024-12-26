import * as Yup from "yup";

import { REQUIRED, VALIDATE } from "@/lib/constants/formSchemaValidation";
import {
  employeeEmailRegex,
  mobileNumberRegex,
  passwordRegex,
} from "@/lib/constants/regex";

export const AddUserFormSchema = Yup.object().shape({
  name: Yup.string().required(REQUIRED.NAME).trim(),
  email: Yup.string()
    .required(REQUIRED.EMAIL)
    .email(VALIDATE.EMAIL)
    .matches(employeeEmailRegex, VALIDATE.EMAIL)
    .trim(),
  mobileNo: Yup.string()
    .trim()
    .required(REQUIRED.MOBILE_NO)
    .matches(mobileNumberRegex, VALIDATE.MOBILE)
    .trim(),
  password: Yup.string()
    .required(REQUIRED.PASSWORD)
    .matches(passwordRegex, VALIDATE.PASSWORD)
    .trim(),
  photo: Yup.mixed().required(REQUIRED.PHOTO), // Field required
});
