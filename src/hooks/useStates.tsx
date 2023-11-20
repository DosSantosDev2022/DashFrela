import { ReactNode, useEffect, useState } from "react"

interface Regiao {
  id: number;
  sigla: string;
  nome: string;
}
interface iEstados {
  id: number;
  sigla: string;
  nome: string;
  regiao: Regiao;
}

interface SelectOption {
  value: string;
  children: string;
}
export const useStates = () => {
    const [estados, setEstados] = useState<SelectOption[]>([])
    

    useEffect(() => {
      fetch('https://brasilapi.com.br/api/ibge/uf/v1')
      .then((response) =>  response.json())
      .then((data : iEstados[]) => {
        const formattedData = data.map((estado) => (
          {value : estado.sigla,
            children: estado.nome,}
          ))
        setEstados(formattedData)
        
      })
      .catch((error) => console.error("Erro ao buscar estados", error))
    }, [])
    
    return (
      estados
    )
}