import {
  FaClipboardCheck,
  FaLocationCrosshairs,
  FaRegWindowRestore,
  FaUserLarge,
} from "react-icons/fa6";
import CardsDash from "./components/cards";
import ProjectList from "./components/projectsList";
import Link from "next/link";

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
      <div className=" bg-white p-4 text-start rounded-md shadow-md">
        <h3 className="font-semibold text-MyColor01 ">Projetos em andamento</h3>
      </div>
      <div className="p-4 bg-slate-200 rounded-md  flex flex-col gap-2 shadow-md">
        <ProjectList name={"Nome Projeto"} icon={undefined} />
        <ProjectList name={"Nome Projeto"} icon={undefined} />
        <ProjectList name={"Nome Projeto"} icon={undefined} />
        <ProjectList name={"Nome Projeto"} icon={undefined} />
        <ProjectList name={"Nome Projeto"} icon={undefined} />
        <div className="border-t-2 border-MyColor01 bg-white w-full p-2">
          <Link href={""}>Ver todos os projetos</Link>
        </div>
      </div>
    </div>
  );
};

export default PageDashboard;
