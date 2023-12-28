import { ReactNode } from 'react'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

interface CardsDashProps {
  name: string
  icon: ReactNode
  content: string
  text: string
  iconColor: string
}

const CardsDash = ({
  name,
  icon,
  content,
  text,
  iconColor,
}: CardsDashProps) => {
  return (
    <Card className=" flex flex-col w-64 h-40">
      <CardHeader className="flex-row justify-between items-center ">
        <CardTitle className="text-lg font-semibold text-MyColor01">
          {name}
        </CardTitle>
        <i
          className={`p-2 rounded-lg`}
          style={{ backgroundColor: iconColor, color: 'white' }}
        >
          {icon}
        </i>
      </CardHeader>
      <CardContent>
        <p className="font-bold text-4xl text-primary">{content}</p>
      </CardContent>
      <CardFooter className="flex items-center gap-2">
        <p className="text-base font-medium text-primary">{text}</p>
        <span className="text-sm font-normal text-foreground">Completado</span>
      </CardFooter>
    </Card>
  )
}

export default CardsDash
