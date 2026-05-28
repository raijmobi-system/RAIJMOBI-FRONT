import Input from "../atoms/input";

interface InputFieldProps {
  label: string;
  placeholder?: string;
  type?: string;
}

export default function InputField({
  label,
  placeholder,
  type = "text",
}: InputFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-black font-medium">
        {label}
      </label>

      <Input
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}