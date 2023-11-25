import Link from 'next/link'

import { MdSpaceDashboard } from 'react-icons/md'

const NavLinks = () => {
  const links = [
    { nome: 'Dashboard', href: '/dashboard/home', icon: <MdSpaceDashboard /> },
    {
      nome: 'Projetos',
      href: '/dashboard/projects',
      icon: <MdSpaceDashboard />,
    },
    { nome: 'Tarefas', href: '/dashboard/tasks', icon: <MdSpaceDashboard /> },
    {
      nome: 'Clientes',
      href: '/dashboard/clients',
      icon: <MdSpaceDashboard />,
    },
    {
      nome: 'Configurações',
      href: '/dashboard/configs',
      icon: <MdSpaceDashboard />,
    },
  ]

  return (
    <nav>
      <ul className="flex flex-col gap-6 h-full">
        {links.map((link) => (
          <li
            key={link.nome}
            className="text-white list-none flex items-center gap-2 p-1 cursor-pointer hover:bg-slate-100 hover:text-MyColor01 transition-all hover:scale-105 rounded-md "
          >
            <i>{link.icon}</i>
            <Link href={link.href}>{link.nome}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavLinks
