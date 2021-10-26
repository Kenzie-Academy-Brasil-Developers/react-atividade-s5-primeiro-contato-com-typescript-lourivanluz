import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = ({ label, placeholder, type, ...rest }: InputProps) => {
  return (
    <div>
      {label && <label>{label}</label>}
      <input type={type} placeholder={placeholder} {...rest} />
    </div>
  );
};
