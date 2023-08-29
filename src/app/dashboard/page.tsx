"use client";

import React from "react";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const { data } = useSession();
  const router = useRouter(); // Obtém o objeto de roteamento

  const handleLogout = async () => {
    await signOut(); // Faz logout
    router.push("/"); // Redireciona para a página inicial (home)
  };

  return (
    <>
      <header className="bg-MyColor01 w-full h-14 p-10 flex  justify-end">
        <div className="flex items-center gap-3 ">
          <Image
            className="rounded-full"
            width={50}
            height={50}
            src={data?.user?.image}
            alt={"Foto do usuário logado"}
          />

          <button
            className="text-MyColor03 hover:underline cursor-pointer"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </header>
    </>
  );
};

export default Dashboard;
