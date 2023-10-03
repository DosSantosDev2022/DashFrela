import FormTasks from "../formTasks";

const ModalCreateTask = () => {
  return (
    <>
      <header className="w-full border-b p-3">
        <h2 className="text-lg font-semibold text-MyColor01">
          Cadastrar nova tarefa
        </h2>
        <p className="text-sm font-light text-MyColor02">
          Preencha as informações da sua tarefa
        </p>
      </header>
      <main className="w-full h-screen p-3">
        <FormTasks />
      </main>
    </>
  );
};

export default ModalCreateTask;
