"use client";
import { FaGoogle } from "react-icons/fa6";
import Button from "@/components/button";
import Input from "@/components/inputs/input";
import LogoDark from "@/components/logo/logo";
import React from "react";
import Link from "next/link";
import CheckInput from "@/components/inputs/checkBox";

export default function Home() {
  return (
    <div className="flex  justify-center items-center">
      <div className="w-[364px] h-[500px] border p-8">
        <div className=" flex flex-col gap-3">
          <LogoDark />
          <h4 className="text-sm font-normal text-MyColor02">
            Insira suas informações de login
          </h4>
        </div>
        <div className="flex flex-col gap-5 mt-3">
          <Input label="Usuário" />
          <Input label="Senha" />
          <CheckInput text={"Lembre-me"} />
        </div>
        <Button className="w-full mt-5" variant="primary">
          Login
        </Button>
        <Button
          className=" flex items-center justify-center gap-3 w-full h-10 mt-5"
          variant="outlined"
        >
          Login com Google
          <FaGoogle />
        </Button>
        <div className="flex justify-around mt-3">
          <Link
            className="text-sm text-MyColor02 font-normal hover:underline"
            href={""}
          >
            Criar sua conta
          </Link>
          <Link
            className="text-sm text-MyColor02 font-normal hover:underline"
            href={""}
          >
            {" "}
            Esqueceu sua senha ?
          </Link>
        </div>
      </div>
    </div>
  );
}
