'use client'

import Image from 'next/image'
import { useSession, signOut } from 'next-auth/react'
import { useState } from 'react'
import { LuLogOut } from 'react-icons/lu'
import { FaRegUser } from 'react-icons/fa'
import { FaGear } from 'react-icons/fa6'
import { TiContacts } from 'react-icons/ti'
import Link from 'next/link'

const UserProfile = () => {
  const { status, data } =
    useSession() /* Obtém os dados da sessão do usuário */

  const [isMenuUserOpen, setIsMenuUserOpen] =
    useState(
      false,
    ) /* contrala o estado do menu dropdown para deslogar da seção */

  const handleLogout = async () => {
    await signOut() // Faz logout

    window.location.href = '/login' // Redireciona para a página inicial (home)
  }

  const toggleMenu = () => {
    setIsMenuUserOpen((prev) => !prev)
  }

  const closeMenu = () => {
    setIsMenuUserOpen(false)
  }

  const dropdownlinks = [
    { nome: ' Meu perfil', url: '/', icon: <FaRegUser /> },
    { nome: 'Meus contatos', url: '', icon: <TiContacts /> },
    { nome: 'Configurações', url: '/dashboard/configs', icon: <FaGear /> },
  ]

  return (
    <>
      <div className="relative  inline-block ">
        <Image
          className="rounded-full cursor-pointer"
          width={50}
          height={50}
          src={data?.user?.image || ''}
          alt={data?.user?.name || 'Nome do usuário logado'}
          onClick={toggleMenu}
        />

        {isMenuUserOpen && (
          <div className="absolute right-0 mt-3 flex w-60 flex-col  bg-white border  rounded-md shadow-md ">
            <ul className="flex flex-col gap-5 border-b px-6 py-7 ">
              {dropdownlinks.map((link) => (
                <li key={link.nome}>
                  <Link
                    href={link.url}
                    className="flex items-center gap-3 text-sm lg:text-base font-medium duration-300 ease-in-out hover:text-MyColor03"
                  >
                    {link.icon}
                    {link.nome}
                  </Link>
                </li>
              ))}
            </ul>
            <button
              className="flex items-center gap-3 py-4 px-6 text-sm font-medium duration-300 ease-in-out hover:text-MyColor03 lg:text-base"
              onClick={handleLogout}
            >
              <LuLogOut />
              Logout
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default UserProfile
