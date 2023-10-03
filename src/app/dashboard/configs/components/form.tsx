import Button from "@/components/buttons/button";
import TextField from "@/components/inputs/textField";
import Label from "../../../../components/inputs/label";

const Form = () => {
  return (
    <form className="w-full">
      <div className=" flex flex-col  w-3/5 space-y-8">
        <div className="flex flex-col w-full">
          <Label htmlFor={"nameuser"}>Nome Completo</Label>
          <TextField id="nameuser" type={"text"} placeholder="Nome completo" />
        </div>
        <div className="flex flex-col w-full">
          <Label htmlFor={"emailuser"}>Email</Label>
          <TextField
            id="emailuser"
            type={"email"}
            placeholder="Digite seu email"
          />
        </div>
        <div className="flex flex-col w-full">
          <Label htmlFor={"phoneuser"}>Telefone</Label>
          <TextField
            id="phoneuser"
            type={"number"}
            placeholder="Digite seu telefone"
          />
        </div>
        <div className="flex gap-2 w-full">
          <Label htmlFor="location">Localização</Label>
          <TextField id="country" type={"text"} placeholder="location" />
          <TextField id="state" type={"text"} placeholder="Estado" />
          <TextField id="city" type={"text"} placeholder="Cidade" />
        </div>
        <div className="flex flex-col w-full">
          <Label htmlFor={"address"}>Endereço</Label>
          <TextField
            id="address"
            type={"text"}
            placeholder="Endereço completo"
          />
        </div>
      </div>

      <div className="w-full mt-2">
        <Button className="w-28">Salvar</Button>
      </div>
    </form>
  );
};

export default Form;
