import Image from 'next/image'

import { MdSpaceDashboard } from 'react-icons/md'
import NavLinks from './links'

const SideBar = () => {
  return (
    <div className="w-60 h-full  bg-MyColor01 p-6 flex flex-col  gap-6 rounded-l-lg ">
      <Image width={150} height={50} src={'/Logo-White.svg'} alt={''} />
      <nav className="flex flex-col gap-6 h-full">
        <NavLinks
          icon={<MdSpaceDashboard />}
          name={'DashBoard'}
          href={'/dashboard/home'}
        />
        <NavLinks
          icon={<MdSpaceDashboard />}
          name={'Projetos'}
          href={'/dashboard/projects'}
        />
        <NavLinks
          icon={<MdSpaceDashboard />}
          name={'Tarefas'}
          href={'/dashboard/tasks'}
        />
        <NavLinks
          icon={<MdSpaceDashboard />}
          name={'Clientes'}
          href={'/dashboard/clients'}
        />
        <NavLinks
          icon={<MdSpaceDashboard />}
          name={'Configurações'}
          href={'/dashboard/configs'}
        />
      </nav>
    </div>
  )
}

export default SideBar
