'use client'

import Button from "@/components/buttons/button";

const ProjectsPage = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between p-6 border">
        <p className="text-MyColor02 font-medium text-lg">Meus projetos</p>
        <Button >Criar Projeto</Button>
      </div>
    </div>
  );
};

export default ProjectsPage;
