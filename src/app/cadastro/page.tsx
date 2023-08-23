"use client";
import { FaGoogle } from "react-icons/fa6";
import Button from "@/components/button";
import Input from "@/components/inputs/input";
import LogoDark from "@/components/logo/logo";
import React from "react";
import Link from "next/link";
import CheckboxInput from "@/components/inputs/checkBox";

const LoginPage = () => {
  return (
    <div className="flex h-screen  justify-center items-center">
      <div className="w-[364px] h-auto border rounded-xl shadow-md p-8">
        <div className=" flex flex-col gap-3">
          <LogoDark />
          <h4 className="text-sm font-normal text-MyColor02">
            Insira suas informações de cadastro
          </h4>
        </div>
        <form className="flex flex-col gap-2 mt-3">
          <Input label="Usuário" type={"text"} />
          <Input label="E-mail" type={"email"} />
          <Input label="Senha" type={"password"} />
          <Input label="Confirme a Senha" type={"password"} />
          <CheckboxInput
            text={
              "Ao criar uma conta, você concorda com os termos e condições."
            }
          />
          <div className="flex gap-2">
            <Button className="w-full mt-2 h-[50px]" variant="primary">
              Cadastrar
            </Button>
            <Button className="w-full mt-2 h-[50px]" variant="outlined">
            Entre com Google
            </Button>
          </div>

          <div className="flex justify-around mt-2">
            <Link
              className="text-sm text-MyColor02 font-normal hover:underline"
              href={""}
            >
              Já é tenho cadastro
            </Link>
            <Link
              className="text-sm text-MyColor02 font-normal hover:underline"
              href={""}
            >
              {" "}
              Esqueceu a senha ?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
