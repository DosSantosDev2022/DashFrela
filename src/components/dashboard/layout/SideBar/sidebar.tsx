import NavLinks from './links'
import Logo from '@/components/logo/logo'

const SideBar = () => {
  return (
    <aside className="w-60 h-full  bg-secondary p-6 flex flex-col  items-start gap-14 rounded-l-lg ">
      <Logo />
      <NavLinks />
    </aside>
  )
}

export default SideBar
