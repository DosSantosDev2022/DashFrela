"use client";

import React from "react";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const HeaderDash = () => {
  const { data } = useSession();
  const router = useRouter(); // Obtém o objeto de roteamento

  const handleLogout = async () => {
    await signOut(); // Faz logout
    router.push("/"); // Redireciona para a página inicial (home)
  };

  return (
    <>
      <header>
        <div className="bg-white w-full px-9 py-3 border flex justify-end">
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
        </div>
      </header>
    </>
  );
};

export default HeaderDash;
