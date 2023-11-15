import { FaClipboardCheck } from "react-icons/fa6";

import Button from "@/components/buttons/button";

const TasksPage = () => {
  return (
    <>
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between p-6 border">
        <p className="text-MyColor02 font-medium text-lg">Minhas tarefas</p>
        <Button >Criar Tarefa</Button>
      </div>
        <div className=" flex gap-3">
          
        </div>
      </div>
    </>
  );
};

export default TasksPage;
