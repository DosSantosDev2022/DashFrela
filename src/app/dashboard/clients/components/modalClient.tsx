import FormClients from "./formClients";

const ModalClient = () => {
  return (
    <>
      <header className="w-full border-b p-3">
        <h2 className="text-lg font-semibold text-MyColor01">
          Cadastrar novo cliente
        </h2>
        <p className="text-sm font-light text-MyColor02">
          Preencha as insformações do cliente
        </p>
      </header>
      <main className="w-full p-6">
        <FormClients />
      </main>
    </>
  );
};

export default ModalClient;
