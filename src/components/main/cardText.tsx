import React from 'react'

// Define uma interface para as props do componente
interface CardTextProps {
  titulo: string
  paragrafo: string
}

const CardText: React.FC<CardTextProps> = ({ titulo, paragrafo }) => {
  return (
    <div className="flex flex-col gap-4 w-72">
      <h4 className="text-MyColor01 text-lg font-semibold">{titulo}</h4>
      <p className="text-MyColor02 font-normal text-sm">{paragrafo}</p>
    </div>
  )
}

export default CardText
