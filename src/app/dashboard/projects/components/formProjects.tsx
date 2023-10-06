import Button from "@/components/buttons/button";
import Label from "@/components/inputs/label";
import Select from "@/components/inputs/select";
import TextArea from "@/components/inputs/textArea";
import TextField from "@/components/inputs/textField";

interface FormProjectsProps {}

const FormProjects = ({}: FormProjectsProps) => {
  const opcoes = [
    { value: "Prioridade Alta", label: "Prioridade Alta" },
    { value: "Prioridade média", label: "Prioridade média" },
    { value: "Prioridade Baixa", label: "Prioridade Baixa" },
  ];
  const pagamentos = [
    { value: "Cartão de credito", label: "Cartão de credito" },
    { value: "Pix", label: "Pix" },
    { value: "Dinheiro", label: "Dinheiro" },
  ];

  return (
    <form className="space-y-3">
      <div className="flex flex-col gap-2">
        <Label htmlFor={"nome"}>Nome do Projeto</Label>
        <TextField
          type={"text"}
          id={"name"}
          name="name"
          value={""}
          placeholder="Digite o nome do seu projeto"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor={"descriptionProject"}>Descrição do Projeto</Label>
        <TextArea
          name="descriptionProject"
          id="descriptionProject"
          placeholder="Descreva o seu projeto"
          value={""}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor={"clientName"}>Selecione cliente</Label>
        <Select id="clientName" options={[]} name="clientName" value={""} />
      </div>
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col gap-2">
          <Label htmlFor={"dataInicio"}>Data inicio</Label>
          <TextField
            type={"date"}
            id={"dataInicio"}
            name="dataInicio"
            value={""}
            placeholder="Digite o nome do seu projeto"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor={"dataEntrega"}>Data entrega</Label>
          <TextField
            type={"date"}
            id={"dataEntrega"}
            name="dataEntrega"
            value={""}
            placeholder="Digite o nome do seu projeto"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor={"priorityProjects"}>Prioridade</Label>
          <Select
            id="priorityProjects"
            options={opcoes}
            value={""}
            name="priorityProjects"
          />
        </div>
      </div>
      <div className="flex items-center gap-5">
        <div className="flex flex-col gap-2 ">
          <Label htmlFor={"priceProject"}>Valor do projeto</Label>
          <TextField
            type={"number"}
            id={"priceProject"}
            name="priceProject"
            value={""}
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <Label htmlFor={"paymentProject"}>Forma de pagamento</Label>
          <Select
            id="paymentProject"
            name="paymentProject"
            options={pagamentos}
            value={""}
          />
        </div>
      </div>
      <div className="flex items-center w-full  p-3 gap-2 mt-3">
        {/* Botão para criar o projeto */}
        <Button type="submit">Cadastrar Projeto</Button>
      </div>
    </form>
  );
};

export default FormProjects;
