import { ReactNode } from "react";

interface ProjectListProps {
  name: string;
  icon: ReactNode;
}

const ProjectList = ({ name, icon }: ProjectListProps) => {
  return (
    <>
      <div className="bg-white p-4 flex justify-between">
        <div>
          <i>{icon}</i>
          <p>{name}</p>
        </div>
        <div>
          <p>horas</p>
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
      </div>
    </>
  );
};

export default ProjectList;
