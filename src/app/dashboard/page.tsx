import HeaderDash from "./components/header";
import SideBar from "./components/sidebar";

const PageDashboard = () => {
  return (
    <>
      <section className=" flex flex-row">
        {/* Include shared UI here e.g. a header or sidebar */}
        <div>
          <SideBar />
        </div>
        <div className="w-full flex flex-col">
          <HeaderDash />
          <main>
            <p>Conteúdo do Dashboard</p>
          </main>
        </div>
        
      </section>
    </>
  );
};

export default PageDashboard;
