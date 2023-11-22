import React from "react";

interface PrioridadeTasksProps {
  namePriority: string;
}

const PriorityTag = ({ namePriority }: PrioridadeTasksProps) => {
  // Função para determinar a classe de cor com base no nome da prioridade
  const getClassBasedOnPriority = (prioridade: string) => {
    switch (prioridade) {
      /* Prioridades Tags */
      case "Prioridade Alta":
        return "bg-red-500";
      case "Prioridade média":
        return "bg-amber-400";
      case "Prioridade Baixa":
        return "bg-green-500";
      /* Status tags */
      case "Pendente":
        return "bg-red-500";
      case "Em andamento":
        return "bg-amber-400";
      case "Concluído":
        return "bg-green-500";
      default:
        return "bg-gray-400";
    }
  };

  // Obtém a classe de cor com base na prioridade
  const corClasse = getClassBasedOnPriority(namePriority);

  return (
    <div className={`p-1 text-xs font-normal text-white rounded-md w-[120px] h-7 flex items-center justify-center ${corClasse}`}>
      {namePriority}
    </div>
  );
};

export default PriorityTag;
