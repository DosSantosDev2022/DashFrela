import CreateItens from "../components/createItens";

const ClientsPage = () => {
  return (
    <>
      <div className="flex flex-col gap-3">
        <CreateItens name={"Meus clientes"} nameButton={"Cadastrar cliente"} />
      </div>
    </>
  );
};

export default ClientsPage;
