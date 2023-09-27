import React from "react";

interface PrioridadeTasksProps {
  namePriority: string;
}

const PriorityTag = ({ namePriority }: PrioridadeTasksProps) => {
  // Função para determinar a classe de cor com base no nome da prioridade
  const getClassBasedOnPriority = (prioridade: string) => {
    switch (prioridade) {
      case "Prioridade Alta":
        return "bg-red-500";
      case "Prioridade Média":
        return "bg-amber-400";
      case "Prioridade Baixa":
        return "bg-green-500";
      default:
        return "bg-gray-400";
    }
  };

  // Obtém a classe de cor com base na prioridade
  const corClasse = getClassBasedOnPriority(namePriority);

  return (
    <p className={`p-1 text-xs font-normal text-white rounded-md ${corClasse}`}>
      {namePriority}
    </p>
  );
};

export default PriorityTag;
