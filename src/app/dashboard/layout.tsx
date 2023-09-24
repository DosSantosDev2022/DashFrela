import HeaderDash from "./components/header";
import SideBar from "./components/sidebar";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-row w-full  h-screen overflow-y-hidden">
      <SideBar />
      <div className="flex w-[calc(100%-250px)] ">
        <HeaderDash />
        <main className="overflow-hidden overflow-y-scroll p-4">
          {children}
        </main>
      </div>
    </section>
  );
}
