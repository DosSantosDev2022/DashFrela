import CardBackground from "@/app/dashboard/components/CardBackground ";
import Button from "@/components/buttons/button";
import FormTasks from "../formTasks";

interface ModalCreateTaskProps {
  onClose: () => void;
}

const ModalCreateTask = ({ onClose }: ModalCreateTaskProps) => {
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 p-4 flex items-center justify-center ">
        <CardBackground
          className={
            "bg-white p-6 w-[920px] max-h-[95vh] overflow-y-auto flex flex-col items-start justify-start scrollbar-thin"
          }
        >
          <div className="w-full flex justify-end">
            <Button onClick={onClose}>Fechar</Button>
          </div>
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
        </CardBackground>
      </div>
    </>
  );
};

export default ModalCreateTask;
