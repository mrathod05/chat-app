import { yupResolver } from "@hookform/resolvers/yup";
import {
  DefaultValues,
  FieldErrors,
  FieldValues,
  UseFormClearErrors,
  UseFormGetValues,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormReset,
  UseFormSetValue,
  UseFormTrigger,
  UseFormStateReturn,
  Control,
  UseFormWatch,
  UseFormSetError,
  useForm
} from "react-hook-form";
import * as yup from "yup";

type FormProps<T extends FieldValues> = {
  register: UseFormRegister<T>;
  handleSubmit: UseFormHandleSubmit<T>;
  setValue: UseFormSetValue<T>;
  getValues: UseFormGetValues<T>;
  reset: UseFormReset<T>;
  clearErrors: UseFormClearErrors<T>;
  trigger: UseFormTrigger<T>;
  control: Control<T>;
  watch: UseFormWatch<T>;
  errors: FieldErrors<T>;
  touchedFields: UseFormStateReturn<T>["touchedFields"];
  isSubmitting: boolean;
  formState: UseFormStateReturn<T>;
  setError: UseFormSetError<T>;
  isValid: boolean;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useDynamicHookForm = <T extends FieldValues>(
  /*eslint-disable @typescript-eslint/no-explicit-any */
  schema: yup.ObjectSchema<any>,
  defaultValues?: DefaultValues<T>
): FormProps<T> => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    reset,
    clearErrors,
    setError,
    trigger,
    control,
    watch,
    formState,
  } = useForm<T>({
    resolver: yupResolver(schema),
    mode: "onTouched",
    defaultValues,
  });

  return {
    register,
    handleSubmit,
    setValue,
    getValues,
    reset,
    clearErrors,
    trigger,
    watch,
    control,
    setError,
    errors: formState.errors,
    isValid: formState.isValid,
    touchedFields: formState.touchedFields,
    isSubmitting: formState.isSubmitting,
    formState,
  };
};
