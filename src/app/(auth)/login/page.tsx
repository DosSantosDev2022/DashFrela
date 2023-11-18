"use client";
import { FaGoogle } from "react-icons/fa6";
import Button from "@/components/buttons/button";
import Input from "@/app/(auth)/login/components/input";
import LogoDark from "@/components/logo/logo";
import React from "react";
import Link from "next/link";
import CheckInput from "@/app/(auth)/login/components/checkBox";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const handleLoginClick = () => signIn();
  const { data: session } = useSession(); // Obtém o estado da sessão
  console.log(session);
  const router = useRouter(); // Obtém o objeto de roteamento

  if (session?.user) {
    // Redireciona o usuário para outra página (por exemplo, Dashboard)
    router.push("/dashboard/home");
    return null; // Pode retornar algo enquanto o redirecionamento ocorre
  }

  return (
    <>
      <div className="flex h-screen  justify-center items-center">
        <div className="w-[364px] h-auto border rounded-xl shadow-md p-8">
          <div className=" flex flex-col gap-3">
            <LogoDark />
            <h4 className="text-sm font-normal text-MyColor02">
              Insira suas informações de login
            </h4>
          </div>
          <form className="flex flex-col gap-5 mt-3">
            <Input label="Usuário" type={"text"} />
            <Input label="Senha" type={"password"} />
            <CheckInput text={"Lembre-me"} />
            <Button className="w-full mt-2" variant="primary">
              Login
            </Button>
            <Button
              onClick={handleLoginClick}
              className=" flex items-center justify-center gap-3 w-full h-10"
              variant="outlined"
            >
              Login com Google
              <FaGoogle />
            </Button>
            <div className="flex justify-around mt-2">
              <Link
                className="text-sm text-MyColor02 font-normal hover:underline"
                href={"/cadastro"}
              >
                Criar sua conta
              </Link>
              <Link
                className="text-sm text-MyColor02 font-normal hover:underline"
                href={""}
              >
                Esqueceu sua senha ?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
