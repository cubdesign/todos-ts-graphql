import React from "react";

export type InputFiledProps = React.InputHTMLAttributes<HTMLInputElement> & {
  containerClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  labelName?: string;
};

export const InputFiled: React.FC<InputFiledProps> = ({
  containerClassName = "",
  labelClassName = "",
  inputClassName = "",
  labelName,
  ...props
}) => {
  return (
    <div className={`${containerClassName}`}>
      <label className={`text-slate-500 pb-1 ${labelClassName}`}>
        {labelName ? labelName : props.name}
      </label>
      <input
        {...props}
        className={`text-gray-600 shadow border py-2 px-3 rounded focus:outline-none ${inputClassName}`}
      />
    </div>
  );
};
