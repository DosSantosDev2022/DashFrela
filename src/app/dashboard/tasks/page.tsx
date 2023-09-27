import { FaClipboardCheck } from "react-icons/fa6";
import CardBackground from "../components/CardBackground ";
import CreateItens from "../components/createItens";
import TaskCards from "./components/taskCards";

const TasksPage = () => {
  return (
    <>
      <div className="flex flex-col gap-3">
        <CreateItens name={"Minhas tarefas"} nameButton={"Criar Tarefas"} />

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
