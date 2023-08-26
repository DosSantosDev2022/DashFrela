import NavBar from "@/components/header/navBar";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header>
        <NavBar />
      </header>

      <main className="container flex flex-col items-center justify-center">
        <div className="flex flex-col items-center p-6 gap-8  w-[768px]">
          <h1 className="text-MyColor01 text-5xl font-bold text-center leading-[60px] w-full">
            Com a DashFreela ficou muito mais fácil gerenciar os seu projetos
            freelancer.
          </h1>
          <p className="text-MyColor02 text-lg text-center font-normal leading-6">
            A plataforma definitiva para freelancers e profissionais
            independentes que desejam elevar seu nível no gerenciamento de
            projetos! Nossa missão é simplificar e otimizar a forma como você
            organiza e administra suas tarefas, projetos e colaborações.
          </p>
          <div className="flex gap-4 items-center">
            <Link
              className="w-20 h-10 bg-MyColor01  text-white flex items-center justify-center"
              href={"/login"}
            >
              Login
            </Link>
            <Link
              className="w-32 h-10 bg-MyColor03  text-MyColor01 flex items-center justify-center"
              href={"/cadastro"}
            >
              Cadastro
            </Link>
          </div>
        </div>

        <div className="mt-20 mb-28">
          <Image src="/placeholder.png" width={800} height={700} alt="" />
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col text-center items-center justify-between gap-4 ">
            <h3 className="text-MyColor01 text-4xl font-semibold">
              O que é o DashFreela ?
            </h3>
            <p className="text-MyColor02 text-lg font-normal leading-6 w-2/4">
              Gerenciar projetos pode ser um desafio, especialmente quando você
              trabalha por conta própria. É por isso que criamos uma solução
              completa, feita sob medida para atender às suas necessidades:
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
