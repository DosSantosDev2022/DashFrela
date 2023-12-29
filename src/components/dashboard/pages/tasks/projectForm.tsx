import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { DatePicker } from '@/components/dashboard/globals/datapicker'

export function ProjectForm() {
  const priorityList = [
    { value: 'Prioridade alta', children: 'Prioridade alta' },
    { value: 'Prioridade média', children: 'Prioridade média' },
    { value: 'Prioridade baixa', children: 'Prioridade baixa' },
  ]
  return (
    <form className="flex flex-col gap-3">
      <div className="w-full space-y-3">
        <Label>Nome da tarefa</Label>
        <Input placeholder="Insira o nome da tarefa" />
      </div>
      <div className="w-full space-y-3">
        <Label>Descrição da sua tarefa</Label>
        <Textarea placeholder="Descreva a sua tarefa" />
      </div>
      <div className=" space-y-3 w-full">
        <Label>Selecione o projeto</Label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Projetos" />
          </SelectTrigger>
          <SelectContent className="outline-none">
            <SelectItem value="Projeto 01">Projeto 01</SelectItem>
            <SelectItem value="Projeto 02">Projeto 02</SelectItem>
            <SelectItem value="Projeto 03">Projeto 03</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex gap-2 items-center justify-between">
        <div className="w-full space-y-3">
          <Label>Data inicio</Label>
          <DatePicker placeholder="Selecione data de início" />
        </div>
        <div className="w-full space-y-3">
          <Label>Data entrega</Label>
          <DatePicker placeholder="Selecione data de entrega" />
        </div>
        <div className=" space-y-3 w-full">
          <Label>Prioridade</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Prioridade" />
            </SelectTrigger>
            <SelectContent className="outline-none">
              {priorityList.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.children}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button size={'default'} variant={'default'}>
          Salvar
        </Button>
      </div>
    </form>
  )
}
