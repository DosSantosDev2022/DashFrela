interface TextFieldProps {
  type: string;
  value?: string;
  placeholder?: string;
  id: string;
}

const TextField: React.FC<TextFieldProps> = ({
  type,
  value,
  placeholder,
  id,
}) => {
  return (
    <>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        className=" border border-MyColor04 text-MyColor02 p-2 rounded-lg w-full"
        id={id}
      />
    </>
  );
};

export default TextField;
