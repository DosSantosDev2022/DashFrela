import { ReactNode } from "react";
import PriorityTag from "../../tasks/components/priorityTags";
import { FaUserGroup } from "react-icons/fa6";

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
        <p className="text-base font-semibold text-MyColor01">{name}</p>
      </div>
      <div>
        <p className="text-base font-semibold text-MyColor02">Cliente</p>
      </div>
      <div>
        <PriorityTag namePriority={namePriority} />
      </div>
      <div>
        <i className="text-2xl">
          <FaUserGroup /> {/* Icone do usuário */}
        </i>
      </div>
      <div>
        <p>progresso</p>
      </div>
    </>
  );
};

export default ProjectList;
