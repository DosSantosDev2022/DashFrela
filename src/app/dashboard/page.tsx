"use client";

import React from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";

const Dashboard = () => {
  const { data } = useSession();
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
        </div>
      </header>
    </>
  );
};

export default Dashboard;
