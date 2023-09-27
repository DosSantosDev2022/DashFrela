import CreateItens from "../components/createItens";

const ConfigurationsPage = () => {
  return (
    <>
      <div className="flex flex-col gap-3">
        <CreateItens name={"Minha conta"} nameButton={"Editar perfil"} />
      </div>
    </>
  );
};

export default ConfigurationsPage;
