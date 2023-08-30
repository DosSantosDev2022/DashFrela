import NavBar from "@/components/header/navBar";
import Link from "next/link";
import Image from "next/image";
import CardText from "@/components/main/cardText";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="container mx-auto flex flex-col items-center justify-center">
        <div className="flex flex-col items-center p-6 gap-8 w-full m-20">
          <h1 className="text-MyColor01 text-2xl lg:text-5xl font-bold text-center w-full">
            Com a DashFreela ficou muito <br /> mais fácil gerenciar os seu
            <br /> projetos freelancer.
          </h1>
          <p className="text-MyColor02 text-lg text-center font-normal leading-6">
            A plataforma definitiva para freelancers e profissionais
            independentes que desejam elevar seu
            <br /> nível no gerenciamento de projetos! Nossa missão é
            simplificar e otimizar a forma como você
            <br />
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

        <div className="flex items-center justify-center mt-20 mb-28 w-full">
          <Image src="/placeholder.png" width={800} height={700} alt="" />
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col text-center items-center justify-between gap-4 ">
            <h3 className="text-MyColor01 text-4xl font-semibold">
              O que é o DashFreela?
            </h3>
            <p className="text-MyColor02 text-lg font-normal leading-6">
              Gerenciar projetos pode ser um desafio, especialmente quando você
              <br />
              trabalha por conta própria. É por isso que criamos uma solução
              completa,
              <br /> feita sob medida para atender às suas necessidades:
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-5 mt-16 p-2">
          <CardText
            titulo={"Intuitivo e poderoso"}
            paragrafo={
              "Com uma interface de usuário intuitiva e funcionalidades poderosas, você terá o controle total sobre seus projetos e tarefas. Desde o acompanhamento do progresso até o compartilhamento de informações essenciais, você nunca esteve tão no comando."
            }
          />
          <CardText
            titulo={"Colaboração simplificada"}
            paragrafo={
              "Trabalhar com outros profissionais é fácil e eficiente com nossas ferramentas de colaboração integradas. Compartilhe atualizações, discuta ideias e mantenha todos os envolvidos na mesma página."
            }
          />
          <CardText
            titulo={"Visão geral e abrangente"}
            paragrafo={
              "Visualize seus projetos em um piscar de olhos. Com gráficos e relatórios personalizados, você terá insights valiosos sobre a produtividade, o cronograma e o desempenho geral."
            }
          />
          <CardText
            titulo={"Segurança e privacidade"}
            paragrafo={
              " Entendemos a importância da segurança dos dados. Nossa plataforma oferece medidas robustas de segurança para garantir que suas informações estejam protegidas a todo momento."
            }
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
