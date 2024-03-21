import { RxDashboard } from 'react-icons/rx'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { prisma } from '@/lib/prisma'
import { Separator } from '@/components/ui/separator'

const headList = [
  { nome: 'Nome do projeto' },
  { nome: 'Horas' },
  { nome: 'Prioridade' },
  { nome: 'Cliente' },
  { nome: 'Progresso' },
]
/* const projectDetails = [
  {
    Projects: {
      id: 1,
      nome: 'Nome projeto',
      hora: '12hs',
      Prioridade: <PriorityTag namePriority="Alta" />,
      Cliente: 'Nome cliente',
      Progresso: 65,
    },
  },
  {
    Projects: {
      id: 2,
      nome: 'Nome projeto',
      hora: '12hs',
      Prioridade: <PriorityTag namePriority="Média" />,
      Cliente: 'Nome cliente',
      Progresso: 45,
    },
  },
  {
    Projects: {
      id: 3,
      nome: 'Nome projeto',
      hora: '12hs',
      Prioridade: <PriorityTag namePriority="Baixa" />,
      Cliente: 'Nome cliente',
      Progresso: 75,
    },
  },
] */

export async function ProjectListResum() {
  const project = await prisma.project.findMany()
  return (
    <>
      <Table className="p-4 rounded-md  flex flex-col gap-2 shadow-md border">
        <div className="flex justify-between items-center px-3 py-3">
          <h3 className="font-semibold text-MyColor01 ">
            Projetos em andamento
          </h3>
        </div>
        <Separator />
        <TableHeader className="bg-secondary">
          <TableRow className="flex">
            {headList.map((item) => (
              <TableHead
                className="font-normal px-0 p-2 flex items-center justify-start w-full text-secondary-foreground "
                key={item.nome}
              >
                {item.nome}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody className="">
          {project.map((item) => (
            <TableRow
              key={item.id}
              className="flex justify-between gap-3 shadow-sm bg-secondary"
            >
              <TableCell className="w-full flex items-center justify-start text-secondary-foreground">
                {item.name || ''}
              </TableCell>
              <TableCell className="w-full flex items-center justify-start text-secondary-foreground">
                {item.name || ''}
              </TableCell>
              <TableCell className="w-full flex items-center justify-start text-secondary-foreground">
                {item.priority || ''}
              </TableCell>
              <TableCell className="w-full flex items-center justify-start text-secondary-foreground">
                {item.clientName || ''}
              </TableCell>
              <TableCell className="w-full flex items-center justify-start text-secondary-foreground">
                <Progress value={10} />
              </TableCell>
              <TableCell className="flex items-center justify-start">
                <Button
                  type="button"
                  size={'xsm'}
                  variant={'default'}
                  className="hover:scale-105 transition-all"
                >
                  <RxDashboard />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <div className=" flex items-end justify-center  w-full p-2 text-center">
          <Button size={'sm'} variant={'ghost'} asChild>
            <Link href={'/dashboard/projects'}>Ver todos os projetos</Link>
          </Button>
        </div>
      </Table>
    </>
  )
}
