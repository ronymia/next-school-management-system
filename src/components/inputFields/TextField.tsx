import React from "react";
import { FieldError } from "react-hook-form";

export type TextFieldProps = {
  label: string;
  type?: string;
  register: any;
  id: any;
  name: string;
  defaultValue?: string;
  error?: FieldError;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};
export default function TextField({
  label,
  type = "text",
  register,
  name,
  defaultValue,
  error,
  inputProps,
}: TextFieldProps) {
  return (
    <div className="flex flex-col gap-2 w-full md:w-5/12">
      <label htmlFor={name} className="text-xs text-gray-500">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        defaultValue={defaultValue}
        {...register("username")}
        {...inputProps}
        className="ring-[1.5px] ring-gray-300 p-2 rounded-md outline-none text-sm"
      />
      {error?.message && <p>{error?.message.toString()}</p>}
    </div>
  );
}
