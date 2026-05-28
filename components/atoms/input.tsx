interface InputProps {
  type?: string;
  placeholder?: string;
}

export default function Input({
  type = "text",
  placeholder,
}: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="border border-gray-300 rounded-lg p-3 text-black outline-none focus:border-blue-500"
    />
  );
}