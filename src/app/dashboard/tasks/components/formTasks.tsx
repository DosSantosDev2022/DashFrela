"use client";

import React, { ReactNode, useState } from "react";
import Button from "@/components/buttons/button";
import Label from "@/components/inputs/label";
import Select from "@/components/inputs/select";
import TextArea from "@/components/inputs/textArea";
import TextField from "@/components/inputs/textField";
import ModalSubTasks from "./modal/modalSubTasks";

interface FormTasksProps {}

const FormTasks: React.FC<FormTasksProps> = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const openModal = () => {
    setIsOpenModal(true);
  };
  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <form className="space-y-5">
      <div className="flex flex-col gap-2">
        <Label htmlFor={"nome"}>Nome da tarefa</Label>
        <TextField
          type={"text"}
          id={"nome"}
          placeholder="Digite o nome da tarefa"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor={"nome"}>Descrição da tarefa</Label>
        <TextArea placeholder="Resuma a sua tarefa" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor={"nome"}>Vincular a um projeto</Label>
        <Select options={[]} />
      </div>
      <div className="flex gap-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor={"dataInicio"}>Data Inicio</Label>
          <TextField type={"date"} id={"dataInicio"} />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor={"dataInicio"}>Data Entrega</Label>
          <TextField type={"date"} id={"dataentrega"} />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor={"dataInicio"}>Prioridade</Label>
          <Select options={[]} />
        </div>
      </div>
      <div className="w-full">
        <Button type="button" className="w-full" onClick={openModal}>
          Adicionar Subtarefas
        </Button>
      </div>
      <div className="w-full boder">
        <p>campo para subtarefas</p>
      </div>
      <div className="w-full flex gap-3">
        <Button>Salvar Tarefa</Button>
      </div>

      {isOpenModal && <ModalSubTasks onClose={closeModal} />}
    </form>
  );
};

export default FormTasks;
