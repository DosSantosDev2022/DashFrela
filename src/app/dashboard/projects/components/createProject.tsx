import Button from "@/components/buttons/button";
import React, { useState } from "react";
import CardBackground from "../../components/CardBackground ";

import FormProjects from "./formProjects";

interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  const [nomeDoProjeto, setNomeDoProjeto] = useState("");

  const handleCreateProject = () => {
    // Lógica para criar um novo projeto
    const novoProjeto = {
      nome: nomeDoProjeto,
      // ... outras propriedades do projeto
    };

    // Você pode chamar uma função para criar o projeto ou realizar outras ações necessárias
    // createProject(novoProjeto);

    // Feche o modal após criar o projeto
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 p-4 flex items-center justify-center ">
      <CardBackground className="bg-white p-6 w-[920px] max-h-[95vh] overflow-y-auto flex flex-col items-start justify-start scrollbar scrollbar-thin">
        <header className="w-full border-b p-3">
          <h2 className="text-lg font-semibold text-MyColor01">
            Cadastrar novo projeto
          </h2>
          <p className="text-sm font-light text-MyColor02">
            Preencha as insformações do seu projeto
          </p>
        </header>
        <div className="w-full p-6">
          <h3 className="text-lg font-semibold text-MyColor01">
            Informações do projeto
          </h3>
          <FormProjects /> {/* formulário de criação de projetos */}
        </div>
        <div className="flex items-center w-full  p-3 gap-2 mt-3">
          {/* Botão para criar o projeto */}
          <Button onClick={handleCreateProject}>Criar Projeto</Button>
          {/* Botão para fechar o Modal */}
          <Button variant="danger" onClick={onClose}>
            Fechar
          </Button>
        </div>
      </CardBackground>
    </div>
  );
};

export default Modal;
