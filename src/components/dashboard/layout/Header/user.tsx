'use client'

import { useSession, signOut } from 'next-auth/react'

import { FaRegUser } from 'react-icons/fa'
import { FaGear } from 'react-icons/fa6'
import { TiContacts } from 'react-icons/ti'

import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import Link from 'next/link'

const UserProfile = () => {
  const { data } = useSession() /* Obtém os dados da sessão do usuário */

  const handleLogout = async () => {
    await signOut() // Faz logout

    window.location.href = '/login' // Redireciona para a página inicial (home)
  }

  const dropdownlinks = [
    { nome: ' Meu perfil', url: '/', icon: <FaRegUser /> },
    { nome: 'Meus contatos', url: '', icon: <TiContacts /> },
    { nome: 'Configurações', url: '/dashboard/configs', icon: <FaGear /> },
  ]

  return (
    <>
      <div className="relative  inline-block ">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar>
              <AvatarImage
                className="rounded-full cursor-pointer w-12 outline-none"
                src={data?.user?.image || ''}
              />
              <AvatarFallback>JS</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {dropdownlinks.map((link) => (
              <DropdownMenuItem key={link.nome}>
                <Link className="flex items-center gap-2" href="">
                  {link.icon}
                  {link.nome}
                </Link>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link onClick={handleLogout} href={''}>
                Sair
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  )
}

export default UserProfile
