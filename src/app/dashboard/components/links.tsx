import Link from "next/link";
import { ReactNode } from "react";
import { MdSpaceDashboard } from "react-icons/md";

interface NavLinksPros {
  icon: ReactNode;
  name: string;
  href: string;
}

const NavLinks = ({ icon, name, href }: NavLinksPros) => {
  return (
    <li className="text-white list-none flex items-center gap-2 p-1 hover:bg-slate-100 hover:text-MyColor01 transition-all hover:scale-105 rounded-md ">
      <i>{icon}</i>
      <Link href={href}>{name}</Link>
    </li>
  );
};

export default NavLinks;
