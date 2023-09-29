"use client";
import { useSession } from "next-auth/react";
import CardBackground from "../components/CardBackground ";
import CreateItens from "../components/createItens";
import Image from "next/image";
import Button from "@/components/buttons/button";
import Form from "./components/form";

const ConfigurationsPage = () => {
  const { data } = useSession();
  console.log(data);

  return (
    <>
      <div className="flex flex-col gap-3">
        <CreateItens name={"Minha conta"} nameButton={"Editar perfil"} />
        <CardBackground className={"w-full flex flex-col space-y-10"}>
          <div className="flex flex-col gap-2 border-b w-full">
            <h3 className="text-lg font-semibold text-MyColor01">
              Configurações Gerais
            </h3>
            <p className=" mb-2">
              Seu endereço de e-mail principal atual é dashprops@example.com
            </p>
          </div>
          <div className="flex flex-col w-full ">
            <div className="flex items-center gap-16 p-4 w-full">
              <p>Avatar</p>
              <Image
                className="rounded-full"
                width={50}
                height={50}
                src={data?.user?.image || ""}
                alt={data?.user?.name || "Nome do usuário cadastrado"}
              />
              <div className="flex gap-2">
                <Button variant="outlined">Alterar</Button>
                <Button variant="outlined">Remover</Button>
              </div>
            </div>
          </div>
          <div className="flex w-full gap-10">
            <p className="">Foto de capa</p>
            <div className="flex flex-col gap-2 w-full items-start">
              <Image
                width={551}
                height={99}
                className="border"
                src={""!}
                alt={""}
              />
              <Button variant="outlined">Alterar</Button>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full border-b">
            <h3 className="text-lg font-semibold text-MyColor01">
              Informações Básicas
            </h3>
            <p className="mb-2">Atualize algumas informações pessoais.</p>
          </div>
          <Form />
        </CardBackground>
      </div>
    </>
  );
};

export default ConfigurationsPage;
