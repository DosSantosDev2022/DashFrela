'use client'

import Button from '@/components/buttons/button';
import Label from '@/components/inputs/label';
import SelectInput from '@/components/inputs/selectInput';
import TextArea from '@/components/inputs/textArea';
import TextField from '@/components/inputs/textField';
import * as Dialog from '@radix-ui/react-dialog';
import { useState } from 'react';
import { IoCloseSharp } from "react-icons/io5";

export function ProjectModal() {

  const priorityList = [
    { value: 'Prioridade alta', children: 'Prioridade alta' },
    { value: 'Prioridade média', children: 'Prioridade média' },
    { value: 'Prioridade baixa', children: 'Prioridade baixa' },
  ];
  

  const [projectName, setProjectName] = useState<string>("")
  const [projectDescription,setProjectDescription] = useState<string>("")
  const [startDate, setStartDate] = useState<string>("")
  const [endDate, setEndDate] = useState<string>("")


  return (
    <>
      <div className="flex items-center justify-between p-6 border">
        <p className="text-MyColor02 font-medium text-lg">Meus projetos</p>

        <Dialog.Root>
          <Dialog.Trigger className='bg-MyColor01 text-white p-2 rounded-md hover:bg-MyColor02' >Criar Projeto</Dialog.Trigger>
            <Dialog.Portal>
            <Dialog.Overlay className='fixed inset-0 bg-black/50'/>
              <Dialog.Content className='fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md shadow-md bg-white p-8'>
                <header className='flex  items-center justify-between  mb-3'>
                  <div className='flex flex-col items-start'>
                    <h2 className='text-MyColor01 font-bold text-lg'>Cadastrar novo projeto</h2>
                    <p className='text-MyColor02 font-light text-md'>Preencha as informações do seu projeto</p>
                  </div>
                  
                  <Dialog.Close>
                      <button   className='text-3xl bg-MyColor01 text-white border-none rounded-md hover:bg-MyColor02 hover:scale-105 transition-all'>
                          <IoCloseSharp />
                      </button>
                  </Dialog.Close>
                </header>
                <main>
                  <h4 className='text-MyColor01 font-semibold text-lg mb-4 border-b'>Informações do projeto</h4>
                  <form className='space-y-5' action="">
                    <div className='flex flex-col gap-2'>
                      <Label  htmlFor='name'>Nome do projeto</Label>
                      <TextField 
                        name='projectname' 
                        type='text' 
                        value={projectName} 
                        id='projectname' 
                        placeholder='Digite o nome do projeto'
                        onChange={(e) => setProjectName(e.target.value)}
                      />
                    </div>
                    <div className='flex flex-col gap-2'>
                    <Label  htmlFor='description'>Descrição do projeto</Label>
                      <TextArea 
                        id='description' 
                        value={projectDescription} 
                        placeholder='Descreva o seu projeto' 
                        name='description'
                        onChange={(e) => setProjectDescription(e.target.value)}
                        />
                    </div>
                    <div className='flex flex-col gap-1'>
                    <Label  htmlFor='selectproject'>Selecione o cliente</Label>
                      <SelectInput  options={priorityList} placeholder="Escolha uma opção"  />
                      <div className='flex gap-5 items-center justify-center mt-5 '>
                        <div className='flex flex-col gap-1'>
                          <Label  htmlFor='dataInicio'>Data Início</Label>
                          <TextField 
                            name='dataInicio'
                            type='date' 
                            value={startDate} 
                            id='projectdate'
                            onChange={(e) => setStartDate (e.target.value)}
                          />
                        </div>
                        <div className='flex flex-col gap-1'>
                          <Label  htmlFor='dateEntrega'>Data Entrega</Label>
                          <TextField 
                            name='dataEntrega' 
                            type='date' 
                            value={endDate} 
                            id='projectdate'
                            onChange={(e) => setEndDate(e.target.value)}
                          />
                        </div>
                        <div className='flex flex-col gap-1'>
                          <Label  htmlFor='selectproject'>Selecionar prioridade</Label>
                          <SelectInput   options={priorityList} placeholder=''  />
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