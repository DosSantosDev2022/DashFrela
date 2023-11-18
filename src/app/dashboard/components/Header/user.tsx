"use client";

import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import { useState } from "react";

const UserProfile = () => {
  const { status, data } = useSession(); /* Obtém os dados da sessão do usuário */
   
  const [isMenuUserOpen, setIsMenuUserOpen] = useState(false) /* contrala o estado do menu dropdown para deslogar da seção */

  const handleLogout = async () => {
    await signOut(); // Faz logout
    
    window.location.href = "/login"; // Redireciona para a página inicial (home)
  };

  const toggleMenu = () => {
    setIsMenuUserOpen((prev) => !prev)
  }

  const closeMenu = () => {
    setIsMenuUserOpen(false)
  }

  return (
    <>
      <div className="relative  inline-block ">
        <Image
          className="rounded-full cursor-pointer"
          width={50}
          height={50}
          src={data?.user?.image || ""}
          alt={data?.user?.name || "Nome do usuário logado"}
          onClick={toggleMenu}
        />

        {isMenuUserOpen && (
          <div className="absolute right-0 mt-2 bg-white border rounded-md shadow-md ">
              <button
              className="block w-full font-medium text-left px-4 py-2 hover:bg-gray-100 transition-all"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default UserProfile;
