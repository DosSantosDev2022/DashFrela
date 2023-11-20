import Button from '@/components/buttons/button';
import Label from '@/components/inputs/label';
import SelectInput from '@/components/inputs/selectInput';
import TextField from '@/components/inputs/textField';
import { useCitys } from '@/hooks/useCitys';
import { useStates } from '@/hooks/useStates';
import * as Dialog from '@radix-ui/react-dialog';
import { useState } from 'react';
import { IoCloseSharp } from "react-icons/io5";




export function ClientModal() {
 

  const estados = useStates() 
  
  const [selectedState, setSelectedState] = useState("")
  const { city, loading } = useCitys({ UF: selectedState });
  const [clientName, setClientName] = useState<string>("")
  const [emailClient, setEmailClient] = useState<string>("")

  const handlerStateChange = (state : string) => {
      setSelectedState(state)
  }

  return (
    <>
      <div className="flex items-center justify-between p-6 border">
        <p className="text-MyColor02 font-medium text-lg">Meus clientes</p>

        <Dialog.Root>
          <Dialog.Trigger className='bg-MyColor01 text-white p-2 rounded-md hover:bg-MyColor02' >Cadastrar cliente</Dialog.Trigger>
            <Dialog.Portal>
            <Dialog.Overlay className='fixed inset-0 bg-black/50'/>
              <Dialog.Content className='fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md shadow-md bg-white p-8 w-[804px] '>
                <header className='flex  items-center justify-between  mb-3'>
                  <div className='flex flex-col items-start'>
                    <h2 className='text-MyColor01 font-bold text-lg'>Cadastrar novo cliente</h2>
                    <p className='text-MyColor02 font-light text-md'>Preencha as informações do seu cliente</p>
                  </div>
                  
                  <Dialog.Close>
                      <button   className='text-3xl bg-MyColor01 text-white border-none rounded-md hover:bg-MyColor02 hover:scale-105 transition-all'>
                          <IoCloseSharp />
                      </button>
                  </Dialog.Close>
                </header>
                <main>
                  <h4 className='text-MyColor01 font-semibold text-lg mb-4 border-b'>Informações do cliente</h4>
                  <form className='space-y-5' action="">
                    <div className='flex flex-col gap-2'>
                      <Label  htmlFor='name'>Nome completo</Label>
                      <TextField 
                        name='projectname' 
                        type='text' 
                        value={clientName} 
                        id='projectname' 
                        placeholder='Digite o nome completo do cliente'
                        onChange={(e) => setClientName(e.target.value)}
                      />
                    </div>
                    <div className='flex flex-col gap-2'>
                      <Label  htmlFor='name'>Email</Label>
                      <TextField 
                        name='emailcliente' 
                        type='email' 
                        value={emailClient} 
                        id='emailcliente' 
                        placeholder='email@cliente.com'
                        onChange={(e) => setEmailClient(e.target.value)}
                      />
                    </div>
                    <div className='flex flex-col gap-1'>
                    <Label  htmlFor='selectproject'>Vincular projeto do cliente</Label>
                       <SelectInput options={estados} placeholder='e' />
                      <div className='flex gap-5 items-center justify-center mt-5 w-full '>
                        <div className='flex flex-col gap-2 w-full'>
                            <Label  htmlFor='name'>Cidade</Label>
                            {loading ? (
                              <p className='text-xs font-normal text-MyColor01'>Buscando cidades...</p>
                            ): (
                                <SelectInput placeholder='' options={city} />
                            )}
                         </div>
                         <div className='flex flex-col gap-2 w-full'>
                            <Label  htmlFor='name'>Estado</Label>
                            <SelectInput 
                              placeholder='' 
                              options={estados} 
                              onChange={(e) => handlerStateChange(e)}
                            />
                         </div>
                      </div>
                    </div>
                    <div className='w-full flex items-center justify-end'>
                      <Button variant='primary' className='w-32' >Salvar</Button>
                    </div>
                  </form>
                </main>
              </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
        
      </div>
    </>
  )
}