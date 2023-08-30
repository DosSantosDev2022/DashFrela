import Image from "next/image";
import Link from "next/link";

import { MdSpaceDashboard } from "react-icons/md";

const SideBar = () => {
  return (
    <div className="w-64 h-screen bg-MyColor01 p-6 flex flex-col  gap-6">
      <Image width={150} height={50} src={"/Logo-White.svg"} alt={""} />
      <nav className="flex flex-col gap-10 h-full">
        <li className="text-white list-none flex items-center gap-2 ">
          <MdSpaceDashboard  />
          <Link href={""}>Dashboard</Link>
        </li>
        <li className="text-white list-none flex items-center gap-2 ">
        <MdSpaceDashboard  />
          <Link href={"/projetos"}>Projetos</Link>
        </li>
        <li className="text-white list-none flex items-center gap-2 ">
        <MdSpaceDashboard  />
          <Link href={""}>Tarefas</Link>
        </li>
        <li className="text-white list-none flex items-center gap-2 ">
        <MdSpaceDashboard  />
          <Link href={""}>Clientes</Link>
        </li>
        <li className="text-white list-none flex items-center gap-2">
        <MdSpaceDashboard  />
          <Link href={""}>Configurações</Link>
        </li>
      </nav>
    </div>
  );
};

export default SideBar;
