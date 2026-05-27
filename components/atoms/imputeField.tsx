import Input from "../atoms/input"

type Props = {
  label: string
  placeholder?: string
  type?: string
}

export default function InputField({
  label,
  placeholder,
  type,
}: Props) {
  return (
    <div className="flex flex-col gap-1">
      <label>{label}</label>

      <Input
        placeholder={placeholder}
        type={type}
      />
    </div>
  )
}