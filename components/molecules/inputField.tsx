import { css } from "@/styled-system/css";
import { Input } from "../atoms/input";

interface InputFieldProps {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
}

export const InputField = ({ label, id, type = "text", placeholder, value, onChange, error, required }: InputFieldProps) => {
  return (
    <div className={css({ spaceY: "1" })}>
      <label htmlFor={id} className={css({ fontSize: "xs", color: "secondary", mb: "1", display: "block" })}>{label}{required && " *"}</label>
      <Input id={id} type={type} placeholder={placeholder} value={value} onChange={onChange} error={error} />
    </div>
  );
};