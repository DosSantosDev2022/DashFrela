import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { ProjectForm } from './projectForm'

export function ProjectModal() {
  return (
    <>
      <div className="flex items-center justify-between p-6 border">
        <p className="text-MyColor02 font-medium text-lg">Meus projetos</p>

        <Dialog>
          <DialogTrigger>Criar Projeto</DialogTrigger>
          <DialogContent>
            <DialogHeader></DialogHeader>
            <DialogTitle>Cadastrar um novo projeto</DialogTitle>
            <DialogDescription>
              Preencha as informações do seu projeto
            </DialogDescription>
            <ProjectForm />
          </DialogContent>
        </Dialog>
      </div>
    </>
  )
}
