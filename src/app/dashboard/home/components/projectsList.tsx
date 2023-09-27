import { ReactNode } from "react";

interface ProjectListProps {
  name: string;
  icon: ReactNode;
}

const ProjectList = ({ name, icon }: ProjectListProps) => {
  return (
    <>
      <div>
        <i>{icon}</i>
        <p>{name}</p>
      </div>
      <div>
        <p>Cliente</p>
      </div>
      <div>
        <p>prioridade</p>
      </div>
      <div>
        <p>membros</p>
      </div>
      <div>
        <p>progresso</p>
      </div>
    </>
  );
};

export default ProjectList;
