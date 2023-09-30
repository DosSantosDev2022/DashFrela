"use client";

import Button from "@/components/buttons/button";
import CardBackground from "../components/CardBackground ";

import PriorityTag from "../components/priorityTags";
import CreateItensProjects from "./components/createItens";

const ProjectsPage = () => {
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
        <CardBackground className={""}>
          {/* Cards que listam os projetos criados pelo usuário */}
          <p>Nome do projeto</p>
          <p>Nome Cliente</p>
          <PriorityTag namePriority={"Prioridade Alta"} />
          <PriorityTag namePriority={"Em andamento"} />
          <div className="flex items-center gap-2">
            <Button>Abrir</Button>
            <Button variant="danger">Excluir</Button>
          </div>
        </CardBackground>
      </div>
    </div>
  );
};

export default ProjectsPage;
