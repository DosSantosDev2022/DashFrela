import React from "react";

interface TextAreaProps {
  placeholder?: string;
  value?: string;
  id: string;
  name: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: React.FC<TextAreaProps> = ({
  placeholder,
  value,
  id,
  name,
  onChange,
}) => {
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="border p-2 rounded-md w-full"
      id={id}
      name={name}
    />
  );
};

export default TextArea;
