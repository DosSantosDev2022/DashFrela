import { TaskResumeTable } from '@/components/dashboard/pages/tasks/taskResume'
import { TaskModal } from '@/components/dashboard/pages/tasks/projectModal'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'

export default function TasksPage() {
  return (
    <div className="flex flex-col gap-10">
      <TaskModal />
      <div className="w-full border rounded-md">
        <div className="w-full h-14 flex items-center gap-3 px-2 py-1">
          <Input
            type="search"
            placeholder="Buscar tarefa..."
            className="w-56"
          />
          <Select>
            <SelectTrigger className="w-44">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent className="outline-none">
              <SelectItem value="Concluídos">Concluídos</SelectItem>
              <SelectItem value="Em andamento">Em andamento</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <TaskResumeTable />
    </div>
  )
}
