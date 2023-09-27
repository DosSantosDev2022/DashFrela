import { ReactNode } from "react";
import PriorityTag from "../../tasks/components/priorityTags";

interface ProjectListProps {
  name: string;
  icon: ReactNode;
  namePriority: string;
}

const ProjectList = ({ name, icon, namePriority }: ProjectListProps) => {
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
        <PriorityTag namePriority={namePriority} />
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
