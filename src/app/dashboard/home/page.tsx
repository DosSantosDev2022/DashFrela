import {
  FaClipboardCheck,
  FaLocationCrosshairs,
  FaRegWindowRestore,
  FaUserLarge,
} from 'react-icons/fa6'
import CardsDash from '@/components/dashboard/pages/home/cards'

import PerformanceGraphic from '@/components/dashboard/pages/home/graphic'
import Teams from '@/components/dashboard/pages/home/teams'
import { ProjectListResum } from '@/components/dashboard/pages/home/projectListResum'

const PageDashboard = () => {
  return (
    <div className="flex- flex-col h-full space-y-14 p-5">
      <div className="flex items-center justify-between gap-4">
        <CardsDash
          name={'Projetos'}
          icon={<FaRegWindowRestore />}
          content={'50'}
          text={'8'}
          iconColor="#624BFF"
        />
        <CardsDash
          name={'Tarefas Ativas'}
          icon={<FaClipboardCheck />}
          content={'50'}
          text={'5'}
          iconColor="#0DCAF0"
        />
        <CardsDash
          name={'Clientes'}
          icon={<FaUserLarge />}
          content={'50'}
          text={'3'}
          iconColor="#DC3545"
        />
        <CardsDash
          name={'Produtividade'}
          icon={<FaLocationCrosshairs />}
          content={'50%'}
          text={'4%'}
          iconColor="#28A745"
        />
      </div>
      <ProjectListResum />

      <div className="flex items-start justify-around gap-5">
        <PerformanceGraphic /> {/* Componente do gráfico de performance */}
        <Teams /> {/* Componente com resumo dos membros do time */}
      </div>
    </div>
  )
}

export default PageDashboard
