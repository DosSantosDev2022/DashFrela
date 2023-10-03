import Button from "@/components/buttons/button";
import Label from "@/components/inputs/label";
import Select from "@/components/inputs/select";
import TextArea from "@/components/inputs/textArea";
import TextField from "@/components/inputs/textField";

const FormClients = () => {
  return (
    <>
      <form className="space-y-3">
        <div className=" grid grid-cols-12 gap-3">
          <div className="flex flex-col gap-2 col-span-6">
            <Label htmlFor={"nome"}>Primeiro nome</Label>
            <TextField
              type={"text"}
              id={"nome"}
              placeholder="Digite seu nome"
            />
          </div>
          <div className="flex flex-col gap-2 col-span-6">
            <Label htmlFor={"nome"}>Sobre nome</Label>
            <TextField
              type={"text"}
              id={"nome"}
              placeholder="Digite seu sobrenome"
            />
          </div>
        </div>
        <div className="grid grid-cols-12 gap-3">
          <div className="flex flex-col gap-2 col-span-8">
            <Label htmlFor={"nome"}>Email</Label>
            <TextField
              type={"email"}
              id={"email"}
              placeholder="seuemail@email.com"
            />
          </div>
          <div className="flex flex-col gap-2 col-span-4">
            <Label htmlFor={"nome"}>Telefone</Label>
            <TextField
              type={"phone"}
              id={"phone"}
              placeholder="(11) xxxx-xxxx"
            />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-3">
          <div className="flex flex-col gap-2 col-span-4">
            <Label htmlFor={"nome"}>Selecione país</Label>
            <Select options={[]} />
          </div>
          <div className="flex flex-col gap-2 col-span-4">
            <Label htmlFor={"nome"}>Selecione estado</Label>
            <Select options={[]} />
          </div>
          <div className="flex flex-col gap-2 col-span-4">
            <Label htmlFor={"nome"}>Selecione cidade</Label>
            <Select options={[]} />
          </div>
        </div>
        <div className="grid grid-cols-12 gap-3">
          <div className="flex flex-col gap-2 col-span-6">
            <Label htmlFor={"nome"}>Endereço</Label>
            <TextField
              type={"text"}
              id={"endereco"}
              placeholder="Digite seu endereço"
            />
          </div>
          <div className="flex flex-col gap-2 col-span-6">
            <Label htmlFor={"nome"}>CEP</Label>
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
