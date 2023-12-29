import React from 'react'

import UserProfile from './user'

import { NotificationsIcon } from './notifications'
import { Input } from '@/components/ui/input'
import { ToggleTheme } from '@/components/theme/toggleTheme'

const HeaderDash = () => {
  return (
    <>
      <header
        className="bg-secondary  w-full
      h-16 px-9 py-3  border flex items-center 
      justify-between border-b shadow-sm "
      >
        <Input className="w-[20rem] " placeholder="Search..." />
        <div className="flex items-center justify-center gap-5 mr-6">
          <NotificationsIcon />
          <ToggleTheme />
          <UserProfile />
        </div>

        {/* imagem do usuário logado */}
      </header>
    </>
  )
}

export default HeaderDash
