import { FaClipboardCheck } from "react-icons/fa6";
import TaskCards from "./components/taskCards";

import CreateItems from "../components/createItens";
import ModalCreateTask from "./components/modal/modalCreateTask";

const TasksPage = () => {
  return (
    <>
      <div className="flex flex-col gap-3">
        <CreateItems
          name={"Minhas tarefas"}
          nameButton={"Criar tarefa"}
          modalContent={<ModalCreateTask />}
        />
        <div className=" flex gap-3">
          <TaskCards
            name={"Nome projeto"}
            icon={<FaClipboardCheck />}
            btnName={"Abrir"}
            namePriority={"Prioridade Alta"}
          />

          <TaskCards
            name={"Nome projeto"}
            icon={<FaClipboardCheck />}
            btnName={"Abrir"}
            namePriority={"Prioridade Média"}
          />

          <TaskCards
            name={"Nome projeto"}
            icon={<FaClipboardCheck />}
            btnName={"Abrir"}
            namePriority={"Prioridade Baixa"}
          />

          <TaskCards
            name={"Nome projeto"}
            icon={<FaClipboardCheck />}
            btnName={"Abrir"}
            namePriority={"Prioridade Alta"}
          />
        </div>
      </div>
    </>
  );
};

export default TasksPage;
