"use client";

import Button from "@/components/buttons/button";
import Label from "@/components/inputs/label";
import Select from "@/components/inputs/select";
import TextArea from "@/components/inputs/textArea";
import TextField from "@/components/inputs/textField";

interface FormProjectsProps {
  onClose: () => void;
}

const FormProjects = ({ onClose }: FormProjectsProps) => {
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
          id={"nome"}
          placeholder="Digite o nome do seu projeto"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor={"nome"}>Descrição do Projeto</Label>
        <TextArea placeholder="Descreva o seu projeto" value={""} />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor={"nome"}>Selecione cliente</Label>
        <Select options={[]} />
      </div>
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col gap-2">
          <Label htmlFor={"dataInicio"}>Data inicio</Label>
          <TextField
            type={"date"}
            id={"dataInicio"}
            placeholder="Digite o nome do seu projeto"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor={"dataEntrega"}>Data entrega</Label>
          <TextField
            type={"date"}
            id={"dataEntrega"}
            placeholder="Digite o nome do seu projeto"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor={""}>Prioridade</Label>
          <Select options={opcoes} />
        </div>
      </div>
      <div className="flex items-center gap-5">
        <div className="flex flex-col gap-2 ">
          <Label htmlFor={""}>Valor do projeto</Label>
          <TextField type={"number"} id={"valor"} />
        </div>
        <div className="flex flex-col gap-2 ">
          <Label htmlFor={""}>Forma de pagamento</Label>
          <Select options={pagamentos} />
        </div>
      </div>
      <div className="flex items-center w-full  p-3 gap-2 mt-3">
        {/* Botão para criar o projeto */}
        <Button>Criar Projeto</Button>
        {/* Botão para fechar o Modal */}
        <Button variant="danger" onClick={onClose}>
          Fechar
        </Button>
      </div>
    </form>
  );
};

export default FormProjects;
