import Button from "@/components/buttons/button";
import { ReactElement } from "react";

interface CreateItensProps {
  name: string;
  nameButton: string;
  button?: ReactElement;
}

const CreateItens = ({ name, nameButton, button }: CreateItensProps) => {
  return (
    <div className="flex items-center justify-between p-6 border">
      <p className="text-MyColor02 font-medium text-lg">{name}</p>
      <Button>{nameButton}</Button>
    </div>
  );
};

export default CreateItens;
