import React from "react";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  options: SelectOption[];
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<SelectProps> = ({ options, value, onChange }) => {
  return (
    <select value={value} onChange={onChange} className="border p-2 rounded-md">
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
