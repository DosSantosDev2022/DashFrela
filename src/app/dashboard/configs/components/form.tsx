import Button from "@/components/buttons/button";
import TextField from "@/components/inputs/textField";
import Label from "../../../../components/inputs/label";

const Form = () => {
  return (
    <form className="w-full">
      <div className=" flex flex-col  w-3/5 space-y-8">
        <div className="flex flex-col w-full">
          <Label htmlFor={"text"}>Nome Completo</Label>
          <TextField id="text" type={"text"} placeholder="Nome completo" />
        </div>
        <div className="flex flex-col w-full">
          <Label htmlFor={"email"}>Email</Label>
          <TextField id="email" type={"email"} placeholder="Digite seu email" />
        </div>
        <div className="flex flex-col w-full">
          <Label htmlFor={"number"}>Telefone</Label>
          <TextField
            id="number"
            type={"number"}
            placeholder="Digite seu telefone"
          />
        </div>
        <div className="flex gap-2 w-full">
          <Label htmlFor={"text"}>Localização</Label>
          <TextField id="pais" type={"text"} placeholder="Selecione Pais" />
          <TextField id="estado" type={"text"} placeholder="Estado" />
          <TextField id="cidade" type={"text"} placeholder="Cidade" />
        </div>
        <div className="flex flex-col w-full">
          <Label htmlFor={"text"}>Endereço</Label>
          <TextField
            id="endereço"
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
