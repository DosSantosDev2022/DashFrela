"use client";

import Button from "@/components/buttons/button";
import CardBackground from "../components/CardBackground ";

import PriorityTag from "../components/priorityTags";

import { useState } from "react";
import ModalProjectResume from "./components/modal/modalProjectResume";
import CreateItems from "../components/createItens";
import ModalProjects from "./components/modal/modalcreateProject";

const ProjectsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col gap-3">
      <CreateItems
        name={"Meus Projetos"}
        nameButton={"Criar projeto"}
        modalContent={<ModalProjects onClose={closeModal} />}
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
