'use client';

import { Field } from 'formik';

export interface IInputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  as?: string | React.ElementType;
}

const InputField = ({ label, id, as = 'input', ...rest }: IInputFieldProps) => {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={id} className="text-base mb-2 color-gray-900">
          {label}
        </label>
      )}
      <Field
        {...rest}
        as={as}
        id={id}
        className="p-3 h-11 text-sm rounded border border-gray-300 shadow"
      />
    </div>
  );
};

export default InputField;
