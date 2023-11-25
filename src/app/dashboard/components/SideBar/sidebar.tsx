import Image from 'next/image'

import NavLinks from './links'

const SideBar = () => {
  return (
    <aside className="w-60 h-full  bg-MyColor01 p-6 flex flex-col  gap-6 rounded-l-lg ">
      <Image width={150} height={50} src={'/Logo-White.svg'} alt={''} />
      <NavLinks />
    </aside>
  )
}

export default SideBar
