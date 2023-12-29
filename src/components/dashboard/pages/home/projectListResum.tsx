import PriorityTag from '@/components/dashboard/globals/priorityTags'
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
import { Separator } from '@/components/ui/separator'

const headList = [
  { nome: 'Nome do projeto' },
  { nome: 'Horas' },
  { nome: 'Prioridade' },
  { nome: 'Cliente' },
  { nome: 'Progresso' },
]
const projectDetails = [
  {
    Projects: {
      id: 1,
      nome: 'Nome projeto',
      hora: '12hs',
      Prioridade: <PriorityTag namePriority="Prioridade Alta" />,
      Cliente: 'Nome cliente',
      Progresso: 65,
    },
  },
  {
    Projects: {
      id: 2,
      nome: 'Nome projeto',
      hora: '12hs',
      Prioridade: <PriorityTag namePriority="Prioridade média" />,
      Cliente: 'Nome cliente',
      Progresso: 45,
    },
  },
  {
    Projects: {
      id: 3,
      nome: 'Nome projeto',
      hora: '12hs',
      Prioridade: <PriorityTag namePriority="Prioridade média" />,
      Cliente: 'Nome cliente',
      Progresso: 75,
    },
  },
]

export function ProjectListResum() {
  return (
    <>
      <Table className="p-4 rounded-md  flex flex-col gap-2 shadow-md border">
        <div className="flex justify-between items-center px-3 py-3">
          <h3 className="font-semibold text-MyColor01 ">
            Projetos em andamento
          </h3>
        </div>
        <Separator />
        <TableHeader className="bg-primary">
          <TableRow className="flex">
            {headList.map((item) => (
              <TableHead
                className="font-bold flex items-center justify-start w-full text-primary-foreground "
                key={item.nome}
              >
                {item.nome}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody className="">
          {projectDetails.map((item) => (
            <TableRow
              key={item.Projects.id}
              className="flex justify-between gap-3 mb-2 p-2 shadow-sm bg-secondary"
            >
              <TableCell className="w-full flex items-center text-secondary-foreground">
                {item.Projects.nome || ''}
              </TableCell>
              <TableCell className="w-full flex items-center text-secondary-foreground">
                {item.Projects.hora || ''}
              </TableCell>
              <TableCell className="w-full flex items-center text-secondary-foreground">
                {item.Projects.Prioridade || ''}
              </TableCell>
              <TableCell className="w-full flex items-center text-secondary-foreground">
                {item.Projects.Cliente || ''}
              </TableCell>
              <TableCell className="w-full flex items-center text-secondary-foreground">
                <Progress value={item.Projects.Progresso} />
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
