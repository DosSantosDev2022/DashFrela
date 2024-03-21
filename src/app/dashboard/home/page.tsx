import { CardsDash } from '@/components/dashboard/pages/home/cards'
import { ProjectListResum } from '@/components/dashboard/pages/home/projectListResum'
import { LucideClipboardList } from 'lucide-react'

const PageDashboard = () => {
  return (
    <div className="w-full border space-y-6 p-2 ">
      <div className="w-full  border flex items-start justify-between gap-2 p-2 ">
        <CardsDash
          text=""
          content="250"
          iconColor="#30aa3cc22"
          name="Projetos"
          icon={<LucideClipboardList />}
        />
        <CardsDash text="" content="45" iconColor="" name="Tarefas" icon={''} />
        <CardsDash
          text=""
          content="129"
          iconColor=""
          name="Clientes"
          icon={''}
        />
      </div>

      <div className="w-full border ">
        <ProjectListResum />
      </div>
    </div>
  )
}

export default PageDashboard
