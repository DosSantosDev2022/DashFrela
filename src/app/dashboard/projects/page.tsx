"use client";

import Button from "@/components/buttons/button";
import CardBackground from "../components/CardBackground ";

const ProjectsPage = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between p-6 border">
        <p>Meus Projetos</p>
        <Button>Criar Projeto</Button>
      </div>
      <div className="flex flex-col gap-4 items-center justify-between p-6">
        <CardBackground className={""}>
          {/* Cards que listam os projetos criados pelo usuário */}
          <p>Nome do projeto</p>
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
