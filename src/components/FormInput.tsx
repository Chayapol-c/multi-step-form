import { ChangeEventHandler } from "react";

type FormInputProps = {
  label: string;
  fieldName: string;
  modelValue: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  handleBlur: ChangeEventHandler<HTMLInputElement>;
  type: string;
  placeholder: string;
  errorMessage: string | undefined;
};

function FormInput({
  label,
  modelValue,
  handleChange,
  handleBlur,
  type="text",
  fieldName,
  placeholder,
  errorMessage,
}: FormInputProps) {
  return (
    <div className="flex flex-col mb-4">
      <div className="mb-2 flex justify-between">
        <label htmlFor={label} className="capitalize text-marine-blue">
          {label}
        </label>
        {errorMessage ? <div className="text-red-500 font-medium">{errorMessage}</div>: null}
      </div>
      <input
        id={fieldName}
        type={type}
        name={fieldName}
        onChange={handleChange}
        onBlur={handleBlur}
        value={modelValue}
        placeholder={placeholder}
        className={`border rounded-md px-4 py-3 placeholder:font-medium placeholder:text-cool-gray ${errorMessage ? 'border-red-500' : ''}`}
      />
    </div>
  );
}

export { FormInput };
