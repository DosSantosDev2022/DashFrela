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
import { DatePicker } from './datapicker'

export function ProjectForm() {
  const priorityList = [
    { value: 'Prioridade alta', children: 'Prioridade alta' },
    { value: 'Prioridade média', children: 'Prioridade média' },
    { value: 'Prioridade baixa', children: 'Prioridade baixa' },
  ]
  return (
    <form className="flex flex-col gap-3">
      <div className="w-full space-y-3">
        <Label>Nome do projeto</Label>
        <Input placeholder="Insira o nome do seu projeto" />
      </div>
      <div className="w-full space-y-3">
        <Label>Descrição do projeto</Label>
        <Textarea placeholder="Insira o nome do seu projeto" />
      </div>
      <div className=" space-y-3 w-full">
        <Label>Selecione o cliente</Label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Clientes" />
          </SelectTrigger>
          <SelectContent className="outline-none">
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
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
      <div className="flex items-center justify-between gap-2">
        <div className="w-full space-y-3">
          <Label>Valor do projeto</Label>
          <Input type="text" placeholder="Insira o nome do seu projeto" />
        </div>
        <div className=" space-y-3 w-full">
          <Label>Formas de pagamentos</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Pagamento" />
            </SelectTrigger>
            <SelectContent className="outline-none">
              <SelectItem value="card">Cartão de crédito</SelectItem>
              <SelectItem value="dark">Pix</SelectItem>
              <SelectItem value="system">Dinheiro</SelectItem>
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
