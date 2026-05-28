"use client";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  text,
  onClick,
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg transition"
    >
      {text}
    </button>
  );
}