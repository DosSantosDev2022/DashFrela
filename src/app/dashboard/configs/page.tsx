'use client'
import Image from "next/image";
import { useSession } from "next-auth/react"
import { MdOutlineAddPhotoAlternate } from "react-icons/md";



export default function ConfigurationPage() {
  const { status, data } = useSession();

  return (
    <div className="w-9/12 bg-white border shadow-md rounded-md p-4 flex flex-col items-start justify-start">
      <div className="flex flex-col gap-2 border-b w-full ">
        <h2 className="text-MyColor02 font-bold text-lg">Configurações gerais</h2>
        <p className="text-MyColor02 font-medium text-base mb-2">Seja bem vindo ao seu perfil de usuário</p>
      </div>
       <div className="overflow-hidden rounded-sm  border border-MyColor04 bg-white">
          <div className="relative z-20 h-35 md:h-64 ">
            <Image width={1000} height={1000} className="rounded-md object-cover object-center" src={'/bg-dev.jpg'} alt="" />
            <button className="flex items-center gap-2 p-2 rounded-md absolute bottom-1 right-1 z-10 bg-MyColor01 text-white font-normal">
            <MdOutlineAddPhotoAlternate />
              Editar
            </button>
          </div>
          <div className="px-4 pb-6 text-center xl:pb-11 absolute ">
              <div className="relative z-30 mx-auto -mt-24 h-32 flex items-center justify-center max-w-[120px] rounded-full p-1 sm:h-44">
                 <Image src={data?.user?.image} alt={data?.user?.name} width={140} height={140} className="rounded-full"/>
                 <button className="flex items-center gap-2 p-2 rounded-md absolute bottom-10 right-1 z-10 bg-MyColor01 text-white font-normal">
                    <MdOutlineAddPhotoAlternate />
                  </button>
              </div>
          </div>
       </div>
       <div className="mt-24 border-t w-full flex flex-col gap-2">
          <h2 className="mt-4 text-xl font-medium text-MyColor01">{data?.user?.name} </h2>
       </div>
    </div>
  )
}
