import React from "react";
import HeaderDash from "./components/header";
import SideBar from "./components/sidebar";
import { NextAuthProvider } from "@/providers/auth";

export default function DashboardLayout({
  children, // será uma página ou um layout aninhado
}: {
  children: React.ReactNode;
}) {
  console.log(NextAuthProvider);
  return (
    <NextAuthProvider>
      <section className="grid grid-cols-12 p-2 w-screen h-screen ">
        <div className="col-span-2 top-0 left-0 h-full">
          <SideBar />
        </div>
        <div className="col-span-10 relative">
          <HeaderDash />
          <main className="bg-slate-100 p-4 absolute top-16 left-0 right-0 bottom-0 overflow-y-auto scrollbar-thin scrollbar-thumb-MyColor01 scrollbar-rounded-xl">
            <div className="p-2 rounded-lg ">{children}</div>
          </main>
        </div>
      </section>
    </NextAuthProvider>
  );
}
