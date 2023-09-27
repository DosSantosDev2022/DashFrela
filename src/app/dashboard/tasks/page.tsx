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
          <CardBackground className={"w-80 h-32"}>
            <TaskCards
              name={"Nome projeto"}
              icon={<FaClipboardCheck />}
              btnName={"Abrir"}
              namePriority={"Prioridade Alta"}
            />
          </CardBackground>
          <CardBackground className={"w-80 h-32"}>
            <TaskCards
              name={"Nome projeto"}
              icon={<FaClipboardCheck />}
              btnName={"Abrir"}
              namePriority={"Prioridade Média"}
            />
          </CardBackground>
          <CardBackground className={"w-80 h-32"}>
            <TaskCards
              name={"Nome projeto"}
              icon={<FaClipboardCheck />}
              btnName={"Abrir"}
              namePriority={"Prioridade Baixa"}
            />
          </CardBackground>
          <CardBackground className={"w-80 h-32"}>
            <TaskCards
              name={"Nome projeto"}
              icon={<FaClipboardCheck />}
              btnName={"Abrir"}
              namePriority={"Prioridade Alta"}
            />
          </CardBackground>
        </div>
      </div>
    </>
  );
};

export default TasksPage;
