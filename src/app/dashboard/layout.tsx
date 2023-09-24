import React from "react";
import HeaderDash from "./components/header";
import SideBar from "./components/sidebar";

export default function DashboardLayout({
  children, // será uma página ou um layout aninhado
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex w-full">
      {/* Sidebar */}
      <div>
        <SideBar />
      </div>

      {/* Conteúdo */}
      <div className="w-full">
        {/* Header */}
        <HeaderDash />

        {/* Conteúdo rolável */}
        <main className=" bg-slate-600 h-screen p-4">
          <div className="">{children}</div>
        </main>
      </div>
    </section>
  );
}
