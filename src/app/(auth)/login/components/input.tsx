import { useState } from 'react'

const Input = (props: { label: string; type: string }) => {
  const [inputValue, setInputValue] = useState('')
  const [error, setError] = useState('')

  const handleInputChange = (event: { target: { value: any } }) => {
    const value = event.target.value
    setInputValue(value)
    setError('')
  }
  const handleBlur = () => {
    if (inputValue.trim() === '') {
      setError('Este campo é obrigatório')
    }
  }
  return (
    <div>
      <label className="text-sm text-MyColor02 font-normal">
        {props.label}
      </label>
      <input
        required
        value={inputValue}
        onBlur={handleBlur}
        onChange={handleInputChange}
        className="w-full h-[43px] border rounded-lg border-MyColor03 outline-none p-2 text-MyColor02 focus:border-MyColor02"
        type={props.type}
      />
      {error && <p className="text-red-500 text-base mt-1">{error}</p>}
    </div>
  )
}

export default Input
