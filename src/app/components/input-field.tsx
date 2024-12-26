'use client';

import { Field } from 'formik';

export interface IInputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const InputField = ({ label, id, ...rest }: IInputFieldProps) => {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={id} className="text-base mb-2 color-gray-900">
          {label}
        </label>
      )}
      <Field
        {...rest}
        id={id}
        className="p-3 h-11 text-sm rounded border border-gray-300 shadow"
      />
    </div>
  );
};

export default InputField;
