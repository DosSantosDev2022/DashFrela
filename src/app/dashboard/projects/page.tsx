import { ProjectModal } from './components/projectModal'

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-3">
      <ProjectModal /> {/* Modal para criar novos projetos */}
    </div>
  )
}
