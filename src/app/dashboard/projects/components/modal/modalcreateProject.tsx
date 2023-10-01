import React from "react";
import CardBackground from "../../../components/CardBackground ";

import FormProjects from "../formProjects";
import Button from "@/components/buttons/button";

interface ModalProjectsProps {
  onClose: () => void;
}

const ModalProjects = ({ onClose }: ModalProjectsProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 p-4 flex items-center justify-center ">
      <CardBackground className="bg-white p-6 w-[920px] max-h-[95vh] overflow-y-auto flex flex-col items-start justify-start scrollbar-thin">
        <div className="w-full flex justify-end">
          <Button onClick={onClose}>Fechar</Button>
        </div>
        <header className="w-full border-b p-3">
          <h2 className="text-lg font-semibold text-MyColor01">
            Cadastrar novo projeto
          </h2>
          <p className="text-sm font-light text-MyColor02">
            Preencha as insformações do seu projeto
          </p>
        </header>
        <div className="w-full p-6">
          <FormProjects />
        </div>
      </CardBackground>
    </div>
  );
};

export default ModalProjects;
