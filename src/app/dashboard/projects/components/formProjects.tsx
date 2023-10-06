"use client";

import Button from "@/components/buttons/button";
import Label from "@/components/inputs/label";
import Select from "@/components/inputs/select";
import TextArea from "@/components/inputs/textArea";
import TextField from "@/components/inputs/textField";
import { PrismaClient } from "@prisma/client";

import { useState } from "react";

const prisma = new PrismaClient();

interface FormProjectsProps {}

const FormProjects = ({}: FormProjectsProps) => {
  const [projectData, setProjectData] = useState({
    name: "",
    descriptionProject: "",
    clientName: "",
    dataInicio: "",
    dataEntrega: "",
    priorityProjects: "",
    priceProject: "",
    paymentProject: "",
  });

  const handlerInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setProjectData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCreateProject = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(projectData),
      });

      if (response.ok) {
        console.log("Projeto criado com sucesso");
      } else {
        console.error("Erro ao criar projeto", response.statusText);
      }
    } catch (error) {
      console.error("Erro ao criar projeto");
    }
  };

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
    <form className="space-y-3" onSubmit={handleCreateProject}>
      <div className="flex flex-col gap-2">
        <Label htmlFor={"nome"}>Nome do Projeto</Label>
        <TextField
          type={"text"}
          id={"name"}
          name="name"
          value={projectData.name}
          onChange={handlerInputChange}
          placeholder="Digite o nome do seu projeto"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor={"descriptionProject"}>Descrição do Projeto</Label>
        <TextArea
          name="descriptionProject"
          id="descriptionProject"
          placeholder="Descreva o seu projeto"
          value={projectData.descriptionProject}
          onChange={handlerInputChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor={"clientName"}>Selecione cliente</Label>
        <Select
          id="clientName"
          options={[]}
          name="clientName"
          value={projectData.clientName}
          onChange={handlerInputChange}
        />
      </div>
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col gap-2">
          <Label htmlFor={"dataInicio"}>Data inicio</Label>
          <TextField
            type={"date"}
            id={"dataInicio"}
            name="dataInicio"
            onChange={handlerInputChange}
            value={projectData.dataInicio}
            placeholder="Digite o nome do seu projeto"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor={"dataEntrega"}>Data entrega</Label>
          <TextField
            type={"date"}
            id={"dataEntrega"}
            name="dataEntrega"
            onChange={handlerInputChange}
            value={projectData.dataEntrega}
            placeholder="Digite o nome do seu projeto"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor={"priorityProjects"}>Prioridade</Label>
          <Select
            id="priorityProjects"
            options={opcoes}
            onChange={handlerInputChange}
            value={projectData.priorityProjects}
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
            onChange={handlerInputChange}
            value={projectData.priceProject}
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <Label htmlFor={"paymentProject"}>Forma de pagamento</Label>
          <Select
            id="paymentProject"
            name="paymentProject"
            options={pagamentos}
            onChange={handlerInputChange}
            value={projectData.paymentProject}
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
