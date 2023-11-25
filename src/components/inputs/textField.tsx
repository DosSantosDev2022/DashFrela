import React, { ChangeEvent } from 'react'

interface TextFieldProps {
  type: string
  value: string
  placeholder?: string
  id: string
  name: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

const TextField: React.FC<TextFieldProps> = ({
  type,
  value,
  placeholder,
  id,
  name,
  onChange,
}) => {
  return (
    <>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        className=" border border-MyColor04 text-MyColor02 p-2 rounded-lg w-full"
        id={id}
        onChange={onChange}
        name={name}
      />
    </>
  )
}

export default TextField
