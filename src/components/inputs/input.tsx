const Input = (props: { label: string }) => {
  return (
    <div>
      <label className="text-sm text-MyColor02 font-normal">
        {props.label}
      </label>
      <input
        className="w-full h-[43px] border rounded-lg border-MyColor03 outline-none p-2 text-MyColor02"
        type="text"
      />
    </div>
  );
};

export default Input;
