'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import LogoDark from '@/components/logo/logo'
import React from 'react'
import Link from 'next/link'
import CheckboxInput from '@/app/(auth)/login/components/checkBox'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Card, CardHeader } from '@/components/ui/card'
import { Label } from '@/components/ui/label'

const CadastroPage = () => {
  const handleLoginClick = () => signIn()
  const { data: session } = useSession() //
  const router = useRouter()
  if (session?.user) {
    // Redireciona o usuário para outra página (por exemplo, Dashboard)
    router.push('/dashboard')
    return null // Pode retornar algo enquanto o redirecionamento ocorre
  }

  return (
    <div className="flex h-screen  justify-center items-center">
      <Card className="w-[420px] h-auto border rounded-xl p-6">
        <CardHeader className=" flex flex-col gap-3">
          <LogoDark />
          <h4 className="text-sm font-normal text-MyColor02">
            Insira suas informações de cadastro
          </h4>
        </CardHeader>
        <form className="flex flex-col gap-4 mt-3">
          <div className="flex flex-col items-start gap-3">
            <Label htmlFor="name">Nome completo</Label>
            <Input type={'text'} placeholder="Digite seu nome" id="name" />
          </div>

          <div className="flex flex-col items-start gap-3">
            <Label htmlFor="email">Digite seu email</Label>
            <Input
              type={'email'}
              placeholder="Digite seu melhor email"
              id="email"
            />
          </div>
          <div className="flex flex-col items-start gap-3">
            <Label htmlFor="password">Digite sua senha</Label>
            <Input
              type={'password'}
              placeholder="Digite sua senha"
              id="password"
            />
          </div>

          <CheckboxInput
            text={
              'Ao criar uma conta, você concorda com os termos e condições.'
            }
          />
          <div className="flex gap-2">
            <Button className="w-full mt-2 " variant="default">
              Cadastrar
            </Button>
            <Button
              className="w-full mt-2 "
              variant="outline"
              onClick={handleLoginClick}
            >
              Entre com Google
            </Button>
          </div>

          <div className="flex justify-around mt-2">
            <Link
              className="text-sm text-MyColor02 font-normal hover:underline"
              href={'/login'}
            >
              Já tenho cadastro
            </Link>
            <Link
              className="text-sm text-MyColor02 font-normal hover:underline"
              href={''}
            >
              {' '}
              Esqueceu a senha ?
            </Link>
          </div>
        </form>
      </Card>
    </div>
  )
}

export default CadastroPage
