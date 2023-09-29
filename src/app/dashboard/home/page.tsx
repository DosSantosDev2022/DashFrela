import {
  FaClipboardCheck,
  FaLocationCrosshairs,
  FaRegWindowRestore,
  FaUserLarge,
} from "react-icons/fa6";
import CardsDash from "./components/cards";
import ProjectList from "./components/projectsList";
import Link from "next/link";
import PerformanceGraphic from "./components/graphic";
import Teams from "./components/teams";
import CardBackground from "../components/CardBackground ";

const PageDashboard = () => {
  return (
    <div className="flex- flex-col h-full space-y-5 p-5">
      <div className="flex items-center justify-between gap-4">
        <CardsDash
          name={"Projetos"}
          icon={<FaRegWindowRestore />}
          content={"50"}
          text={"8"}
        />
        <CardsDash
          name={"Tarefas Ativas"}
          icon={<FaClipboardCheck />}
          content={"50"}
          text={"5"}
        />
        <CardsDash
          name={"Clientes"}
          icon={<FaUserLarge />}
          content={"50"}
          text={"3"}
        />
        <CardsDash
          name={"Produtividade"}
          icon={<FaLocationCrosshairs />}
          content={"50%"}
          text={"4%"}
        />
      </div>
      <CardBackground className={"text-start"}>
        <h3 className="font-semibold text-MyColor01 ">Projetos em andamento</h3>
      </CardBackground>
      <div className="p-4 bg-slate-200 rounded-md  flex flex-col gap-2 shadow-md">
        <CardBackground className={""}>
          <ProjectList
            name={"Nome Projeto"}
            icon={undefined}
            namePriority={"Prioridade Alta"}
          />
        </CardBackground>
        <CardBackground className={""}>
          <ProjectList
            name={"Nome Projeto"}
            icon={undefined}
            namePriority={"Prioridade Baixa"}
          />
        </CardBackground>
        <CardBackground className={""}>
          <ProjectList
            name={"Nome Projeto"}
            icon={undefined}
            namePriority={"Prioridade Média"}
          />
        </CardBackground>
        <CardBackground className={""}>
          <ProjectList
            name={"Nome Projeto"}
            icon={undefined}
            namePriority={"Prioridade Alta"}
          />
        </CardBackground>
        <div className="border-t border-MyColor01 bg-white w-full p-2 text-center">
          <Link href={"/dashboard/projects"}>Ver todos os projetos</Link>
        </div>
      </div>
      <div className="flex items-start justify-around gap-5">
        <PerformanceGraphic /> {/* Componente do gráfico de performance */}
        <Teams /> {/* Componente com resumo dos membros do time */}
      </div>
    </div>
  );
};

export default PageDashboard;
