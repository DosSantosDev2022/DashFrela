import CreateItens from "../components/createItens";

import ModalClient from "./components/modalClient";

const ClientsPage = () => {
  return (
    <>
      <div className="flex flex-col gap-3">
        <CreateItens
          name={"Meus clientes"}
          nameButton={"Cadastrar cliente"}
          modalContent={<ModalClient />}
        />
      </div>
    </>
  );
};

export default ClientsPage;
