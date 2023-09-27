import Button from "@/components/buttons/button";

interface CreateItensProps {
  name: string;
  nameButton: string;
}

const CreateItens = ({ name, nameButton }: CreateItensProps) => {
  return (
    <div className="flex items-center justify-between p-6 border">
      <p className="text-MyColor02 font-medium text-lg">{name}</p>
      <Button>{nameButton}</Button>
    </div>
  );
};

export default CreateItens;
