import { useEffect, useState } from 'react'

interface iCidade {
  nome: string
  codigo_ibge: string
}

interface SelectOption {
  value: string
  children: string
}

interface cityProps {
  UF: string
}

export const useCitys = ({ UF }: cityProps) => {
  const [city, setCity] = useState<SelectOption[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(`https://brasilapi.com.br/api/ibge/municipios/v1/${UF}`)
      .then((response) => response.json())
      .then((data: iCidade[]) => {
        const formattedData = data.map((cidade: { nome: string }) => ({
          value: cidade.nome,
          children: cidade.nome,
        }))
        setCity(formattedData)
      })
      .catch((error) => console.error('Erro ao buscar estados', error))
      .finally(() => {
        setLoading(false)
      })
  }, [UF])

  return { city, loading }
}
