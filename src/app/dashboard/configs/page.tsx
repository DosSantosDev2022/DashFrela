
import UserProfile from "../components/Header/user"
import Button from "@/components/buttons/button"

export default function ConfigurationPage() {
  return (
    <div className="w-9/12 bg-white border shadow-md rounded-md p-4 flex flex-col items-start justify-start">
      <div className="flex flex-col gap-2 border-b w-full ">
        <h2 className="text-MyColor02 font-bold text-lg">Configurações gerais</h2>
        <p className="text-MyColor02 font-medium text-base mb-2">Seja bem vindo ao seu perfil de usuário</p>
      </div>
      <div className="flex items-center justify-between gap-3 p-4">
        <p className="text-lg font-semibold text-MyColor01">Avatar</p>
        <UserProfile />
        <Button type="button">Alterar</Button>
        <Button variant="danger">Remover</Button>
      </div>
      <div className="flex items-center justify-between gap-3 p-4">
          <p className="text-MyColor02 font-medium text-base mb-2">Foto de capa</p>
      </div>
    </div>
  )
}
