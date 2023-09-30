import React from "react";

interface TextAreaProps {
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: React.FC<TextAreaProps> = ({
  placeholder,
  value,
  onChange,
}) => {
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="border p-2 rounded-md w-full"
    />
  );
};

export default TextArea;
