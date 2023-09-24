import HeaderDash from "./components/header";
import SideBar from "./components/sidebar";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-row">
      <SideBar />
      <div className="w-full flex flex-col">
        <HeaderDash />
        <section className="w-full h-full p-2">{children}</section>
      </div>
    </section>
  );
}
