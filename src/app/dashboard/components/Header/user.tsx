"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";

const UserProfile = () => {
  const { data } = useSession();
  const router = useRouter(); // Obtém o objeto de roteamento
  const handleLogout = async () => {
    await signOut(); // Faz logout
    router.push("/"); // Redireciona para a página inicial (home)
  };

  return (
    <>
      <div className="flex items-center gap-3 ">
        <Image
          className="rounded-full"
          width={50}
          height={50}
          src={data?.user?.image || ""}
          alt={data?.user?.name || "Nome do usuário logado"}
        />

        <button
          className="text-MyColor03 cursor-pointer p-2 rounded-md hover:bg-MyColor01 hover:text-white transition-all"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default UserProfile;
