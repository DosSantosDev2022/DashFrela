import React, { useState } from "react";
import CardBackground from "../../../components/CardBackground ";

import FormProjects from "../formProjects";

const Modal = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 p-4 flex items-center justify-center ">
      <CardBackground className="bg-white p-6 w-[920px] max-h-[95vh] overflow-y-auto flex flex-col items-start justify-start scrollbar-thin">
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
          <FormProjects onClose={function (): void {}} />
        </div>
      </CardBackground>
    </div>
  );
};

export default Modal;
