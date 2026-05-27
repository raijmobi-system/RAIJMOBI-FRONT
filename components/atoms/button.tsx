type ButtonProps = {
  text: string
  onClick?: () => void
  type?: "button" | "submit" | "reset"
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
      className="bg-blue-500 text-white px-4 py-2 rounded"
    >
      {text}
    </button>
  )
}