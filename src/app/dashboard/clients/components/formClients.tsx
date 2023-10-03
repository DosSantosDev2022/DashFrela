import Button from "@/components/buttons/button";
import Label from "@/components/inputs/label";
import Select from "@/components/inputs/select";
import TextField from "@/components/inputs/textField";

const FormClients = () => {
  return (
    <>
      <form className="space-y-3">
        <div className=" grid grid-cols-12 gap-3">
          <div className="flex flex-col gap-2 col-span-6">
            <Label htmlFor={"name"}>Primeiro nome</Label>
            <TextField
              type={"text"}
              id={"name"}
              placeholder="Digite seu nome"
            />
          </div>
          <div className="flex flex-col gap-2 col-span-6">
            <Label htmlFor={"surname"}>Sobre nome</Label>
            <TextField
              type={"text"}
              id={"surname"}
              placeholder="Digite seu sobrenome"
            />
          </div>
        </div>
        <div className="grid grid-cols-12 gap-3">
          <div className="flex flex-col gap-2 col-span-8">
            <Label htmlFor={"email"}>Email</Label>
            <TextField
              type={"email"}
              id={"email"}
              placeholder="seuemail@email.com"
            />
          </div>
          <div className="flex flex-col gap-2 col-span-4">
            <Label htmlFor={"phone"}>Telefone</Label>
            <TextField
              type={"phone"}
              id={"phone"}
              placeholder="(11) xxxx-xxxx"
            />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-3">
          <div className="flex flex-col gap-2 col-span-4">
            <Label htmlFor={"country"}>Selecione país</Label>
            <Select id="country" options={[]} />
          </div>
          <div className="flex flex-col gap-2 col-span-4">
            <Label htmlFor={"state"}>Selecione estado</Label>
            <Select id="state" options={[]} />
          </div>
          <div className="flex flex-col gap-2 col-span-4">
            <Label htmlFor={"city"}>Selecione cidade</Label>
            <Select id="city" options={[]} />
          </div>
        </div>
        <div className="grid grid-cols-12 gap-3">
          <div className="flex flex-col gap-2 col-span-6">
            <Label htmlFor={"endereco"}>Endereço</Label>
            <TextField
              type={"text"}
              id={"endereco"}
              placeholder="Digite seu endereço"
            />
          </div>
          <div className="flex flex-col gap-2 col-span-6">
            <Label htmlFor={"cep"}>CEP</Label>
            <TextField
              type={"number"}
              id={"cep"}
              placeholder="Digite seu CEP"
            />
          </div>
        </div>

        <div className="flex items-center w-full  p-3 gap-2 mt-3">
          {/* Botão para criar o projeto */}
          <Button>Cadastrar Cliente</Button>
        </div>
      </form>
    </>
  );
};

export default FormClients;
