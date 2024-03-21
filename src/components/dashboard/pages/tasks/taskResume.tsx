import { PriorityTag } from '@/components/dashboard/globals/priorityTags'
import { RxDashboard } from 'react-icons/rx'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Separator } from '@/components/ui/separator'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

const headList = [
  { nome: 'Nome da tarefa' },
  { nome: 'Horas' },
  { nome: 'Prioridade' },
  { nome: 'Projeto' },
  { nome: 'Progresso' },
]
const taskDetails = [
  {
    Task: {
      id: 1,
      nome: 'Nome tarefa',
      hora: '12hs',
      Prioridade: <PriorityTag namePriority="Prioridade Alta" />,
      Cliente: 'Nome projeto',
      Progresso: 15,
    },
  },
  {
    Task: {
      id: 2,
      nome: 'Nome tarefa',
      hora: '12hs',
      Prioridade: <PriorityTag namePriority="Prioridade média" />,
      Cliente: 'Nome projeto',
      Progresso: 95,
    },
  },
  {
    Task: {
      id: 3,
      nome: 'Nome tarefa',
      hora: '12hs',
      Prioridade: <PriorityTag namePriority="Prioridade baixa" />,
      Cliente: 'Nome projeto',
      Progresso: 62,
    },
  },
  {
    Task: {
      id: 4,
      nome: 'Nome tarefa',
      hora: '12hs',
      Prioridade: <PriorityTag namePriority="Prioridade baixa" />,
      Cliente: 'Nome projeto',
      Progresso: 62,
    },
  },
  {
    Task: {
      id: 5,
      nome: 'Nome tarefa',
      hora: '12hs',
      Prioridade: <PriorityTag namePriority="Prioridade baixa" />,
      Cliente: 'Nome projeto',
      Progresso: 62,
    },
  },
]

export function TaskResumeTable() {
  return (
    <div className="">
      <Table className="p-4 rounded-md  flex flex-col gap-2 shadow-md border">
        <div className="flex justify-between items-center px-3 py-3">
          <h3 className="font-semibold text-MyColor01 ">
            Tarefas em andamento
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
          {taskDetails.map((item) => (
            <TableRow
              key={item.Task.id}
              className="flex justify-between gap-3 mb-2 p-2 shadow-sm bg-secondary"
            >
              <TableCell className="w-full flex items-center text-secondary-foreground">
                {item.Task.nome || ''}
              </TableCell>
              <TableCell className="w-full flex items-center text-secondary-foreground">
                {item.Task.hora || ''}
              </TableCell>
              <TableCell className="w-full flex items-center text-secondary-foreground">
                {item.Task.Prioridade || ''}
              </TableCell>
              <TableCell className="w-full flex items-center text-secondary-foreground">
                {item.Task.Cliente || ''}
              </TableCell>
              <TableCell className="w-full flex items-center text-secondary-foreground">
                <Progress value={item.Task.Progresso} />
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

        <div className="w-full p-2 flex items-center justify-end">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </Table>
    </div>
  )
}
