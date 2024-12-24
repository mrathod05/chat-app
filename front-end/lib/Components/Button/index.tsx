import { JSX } from "react";

import Loading from "../Loading";
type Props = {
  type?: "submit";
  className?: string;
  text?: string;
  handleClick?: () => void;
  disabled?: boolean;
};
export const Button = ({
  type,
  className,
  text,
  handleClick,
  disabled,
}: Props): JSX.Element => {
  const handleOnClick = (): void => {
    if (handleClick) {
      handleClick();
    }
  };
  return (
    <button
      type={type}
      className={`bg-green  mx-auto rounded-[1.875rem] text-2xl font-semibold text-white py-2  px-[2.1875rem]  md:py-[0.875rem] md:px-[3.375rem] ${className}`}
      onClick={handleOnClick}
    >
      {disabled ? <Loading /> : text}
    </button>
  );
};
