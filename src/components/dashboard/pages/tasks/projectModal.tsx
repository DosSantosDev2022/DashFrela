import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { ProjectForm } from './projectForm'

export function TaskModal() {
  return (
    <>
      <div className="flex items-center justify-between p-6 border">
        <p className="text-MyColor02 font-medium text-lg">Minhas tarefas</p>

        <Dialog>
          <DialogTrigger>Criar Tarafa</DialogTrigger>
          <DialogContent>
            <DialogHeader></DialogHeader>
            <DialogTitle>
              Cadastrar uma novo tarefa para seus projetos
            </DialogTitle>
            <DialogDescription>
              Preencha as informações da sua tarefa
            </DialogDescription>
            <ProjectForm />
          </DialogContent>
        </Dialog>
      </div>
    </>
  )
}
