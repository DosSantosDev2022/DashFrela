"use client";

import Button from "@/components/buttons/button";
import CardBackground from "../components/CardBackground ";

import PriorityTag from "../components/priorityTags";
import CreateItensProjects from "./components/createItens";
import { useState } from "react";
import ModalProjectResume from "./components/modal/modalProjectResume";

const ProjectsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleCreateProject = () => {
    const novoProjeto = {};
  };

  return (
    <div className="flex flex-col gap-3">
      <CreateItensProjects
        name={"Meus projetos"}
        nameButton={"Criar Projeto"}
        onCreate={handleCreateProject}
      />

      <div className="flex flex-col gap-4 items-center justify-between p-6 border">
        <CardBackground className={"w-full"}>
          {/* Cards que listam os projetos criados pelo usuário */}
          <p>Nome do projeto</p>
          <p>Nome Cliente</p>
          <PriorityTag namePriority={"Prioridade Alta"} />
          <PriorityTag namePriority={"Em andamento"} />
          <div className="flex items-center gap-2">
            <Button onClick={openModal}>Abrir</Button>
            <Button variant="danger">Excluir</Button>
          </div>
        </CardBackground>
        {isModalOpen && <ModalProjectResume onClose={closeModal} />}
      </div>
    </div>
  );
};

export default ProjectsPage;
