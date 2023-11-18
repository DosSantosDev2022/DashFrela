import {
  FaClipboardCheck,
  FaLocationCrosshairs,
  FaRegWindowRestore,
  FaUserLarge,
} from "react-icons/fa6";
import CardsDash from "./components/cards";
import Link from "next/link";
import PerformanceGraphic from "./components/graphic";
import Teams from "./components/teams";
import { ProjectListResum } from "./components/projectListResum";


const PageDashboard = () => {
  return (
    <div className="flex- flex-col h-full space-y-5 p-5">
      <div className="flex items-center justify-between gap-4">
        <CardsDash
          name={"Projetos"}
          icon={<FaRegWindowRestore />}
          content={"50"}
          text={"8"}
          iconColor="#624BFF"
        />
        <CardsDash
          name={"Tarefas Ativas"}
          icon={<FaClipboardCheck />}
          content={"50"}
          text={"5"}
          iconColor="#0DCAF0"
        />
        <CardsDash
          name={"Clientes"}
          icon={<FaUserLarge />}
          content={"50"}
          text={"3"}
          iconColor="#DC3545"
        />
        <CardsDash
          name={"Produtividade"}
          icon={<FaLocationCrosshairs />}
          content={"50%"}
          text={"4%"}
          iconColor="#28A745"
        />
      </div>
      <div className="bg-white rounded-md p-6 shadow-lg  flex justify-between items-center">
        <h3 className="font-semibold text-MyColor01 ">Projetos em andamento</h3>
      </div>
        <ProjectListResum/>{/* Componente para renderizar um resumo  de projetos */}
       <div className=" flex items-end justify-center bg-white w-full p-2 text-center">
          <Link className="bg-MyColor01 p-2 rounded-md text-white hover:bg-MyColor02 transition-all" href={"/dashboard/projects"}>Ver todos os projetos</Link>
        </div>
      <div className="flex items-start justify-around gap-5">
        <PerformanceGraphic /> {/* Componente do gráfico de performance */}
        <Teams /> {/* Componente com resumo dos membros do time */}
      </div>
    </div>
  );
};

export default PageDashboard;
