import React from "react";
import FormProjects from "../formProjects";

const ModalProjects = () => {
  return (
    <>
      <header className="w-full border-b p-3">
        <h2 className="text-lg font-semibold text-MyColor01">
          Cadastrar novo projeto
        </h2>
        <p className="text-sm font-light text-MyColor02">
          Preencha as insformações do seu projeto
        </p>
      </header>
      <main className="w-full p-6">
        <FormProjects />
      </main>
    </>
  );
};

export default ModalProjects;
