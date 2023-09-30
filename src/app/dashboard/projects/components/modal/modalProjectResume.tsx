import Button from "@/components/buttons/button";
import CardBackground from "../../../components/CardBackground ";
import FormProjects from "../formProjects";

interface ModalProjectResumeProps {
  onClose: () => void;
}

const ModalProjectResume = ({ onClose }: ModalProjectResumeProps) => {
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 p-4 flex items-center justify-center ">
        <CardBackground className="bg-white p-6 w-[920px] max-h-[95vh] overflow-y-auto flex flex-col items-start justify-start">
          <div className="w-full flex justify-end">
            <Button onClick={onClose}>Fechar</Button>
          </div>
          <header className="w-full border-b p-3">
            <h2 className="text-lg font-semibold text-MyColor01">
              Nome do projeto
            </h2>
            <p className="text-sm font-light text-MyColor02">
              Aqui estão as infromações do projeto
            </p>
          </header>
          <main className="w-full h-screen p-3"></main>
          <footer className="w-full border-t p-3"></footer>
        </CardBackground>
      </div>
    </>
  );
};

export default ModalProjectResume;
