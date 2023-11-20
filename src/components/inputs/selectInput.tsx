import React from 'react';
import * as Select from '@radix-ui/react-select';
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineCheck } from "react-icons/md";


interface SelectItemProps {
  children : string
  value : string 
}

interface SelectInputProps {
  options: SelectItemProps[];
  placeholder: string
  onChange?: (value: string) => void;
}



const SelectInput = ({options , onChange} : SelectInputProps) => {    
  const handleChange = (value: string) => {
    if (onChange) {
      onChange(value);
    }
  };


  return (
    <Select.Root onValueChange={handleChange}>
        <Select.Trigger className="inline-flex items-center justify-center rounded px-[15px] text-lg leading-none h-[45px] gap-[5px] bg-white text-MyColor01 shadow-[0_2px_10px] shadow-black/10 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-violet9 outline-none" aria-label="SelectProject">
          <Select.Value placeholder="Selecione" />
          <Select.Icon className="text-MyColor01">
              <IoIosArrowDown /> 
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content  className="overflow-hidden bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] ">
            <Select.Viewport className="p-[5px] max-h-[200px] overflow-y-auto ">
              <Select.Group >
                {options.map((option) => (
                  <SelectItem key={option.value} value={option.value} >
                    {option.value}
                  </SelectItem>
                ))}
              </Select.Group>
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>    
      )
  }


// eslint-disable-next-line react/display-name
const SelectItem = (({ children, value, ...props } : SelectItemProps  ) => {
  return (
    <Select.Item   
    className={('text-lg leading-none text-MyColor01  rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-MyColor04 data-[highlighted]:text-MyColor02')} 
      value={value}
    {...props}
    
    >
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
        <MdOutlineCheck />
      </Select.ItemIndicator>
    </Select.Item>
  );
});

export default SelectInput;