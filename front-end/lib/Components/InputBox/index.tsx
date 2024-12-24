import { FocusEvent, JSX, ReactNode } from "react";
import { UseFormRegister } from "react-hook-form";

import { ErrorMessage } from "../ErrorMessage";

type Props = {
  filedName?: string;
  className?: string;
  type?: string;
  placeholder?: string;
  passwordField?: boolean;
  icon?: ReactNode;
  disabled?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: UseFormRegister<any>;
  errormessage?: string;
  value?: string | number;
  /* eslint-disable @typescript-eslint/no-explicit-any */
  onChange?: (value: any) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: any;
  readOnly?: boolean;
};
export const InputBox = ({
  filedName,
  className,
  type,
  placeholder,
  icon,
  register,
  errormessage,
  value,
  onChange,
  onFocus,
  onKeyDown,
  readOnly,
}: Props): JSX.Element => {
  const handleChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = target;
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className="relative">
      <input
        type={type}
        placeholder={placeholder}
        className={`rounded-[1.875rem] h-[3.125rem]  outline-none pl-10 w-full ${className}`}
        {...(register && { ...register(`${filedName}`) })}
        {...(onChange && { onChange: handleChange })}
        readOnly={readOnly}
        value={value}
        autoComplete="off"
        onFocus={onFocus}
        onKeyDown={onKeyDown}
      />
      <span className="absolute md:top-[0.8125rem] top-[0.5625rem] left-[0.625rem]">
        {icon}
      </span>

      {errormessage && <ErrorMessage message={errormessage} />}
    </div>
  );
};
