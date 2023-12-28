import React from 'react'

import UserProfile from './user'
import SearchInput from './inputSearch'
import { NotificationsIcon } from './notifications'

const HeaderDash = () => {
  return (
    <>
      <header
        className="bg-secondary  w-full
      h-16 px-9 py-3  border flex items-center 
      justify-between border-b shadow-sm "
      >
        <SearchInput />
        <div className="flex items-center justify-center gap-5 mr-6">
          <NotificationsIcon />
          <UserProfile />
        </div>

        {/* imagem do usuário logado */}
      </header>
    </>
  )
}

export default HeaderDash
