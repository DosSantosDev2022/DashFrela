interface PrioridadeTasksProps {
  namePriority: string
}

const priorityColors: Record<string, string> = {
  Alta: 'bg-red-500',
  Média: 'bg-amber-400',
  Baixa: 'bg-green-500',
}

export function PriorityTag({ namePriority }: PrioridadeTasksProps) {
  const getClassBasedOnPriority = (prioridade: string) => {
    return priorityColors[prioridade]
  }

  const corClasse = getClassBasedOnPriority(namePriority)

  return (
    <div
      className={`text-[10px] font-normal text-white rounded-md w-14  h-5 flex items-center justify-center ${corClasse}`}
    >
      {namePriority}
    </div>
  )
}
