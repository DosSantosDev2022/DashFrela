import CardBackground from "@/app/dashboard/components/CardBackground ";
import Button from "@/components/buttons/button";
import Label from "@/components/inputs/label";
import TextField from "@/components/inputs/textField";
import { AiFillCloseCircle } from "react-icons/ai";

interface ModalSubTasksProps {
  onClose: () => void;
}

const ModalSubTasks = ({ onClose }: ModalSubTasksProps) => {
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 p-4 flex items-center justify-center ">
        <CardBackground className={"w-80 flex flex-col gap-4"}>
          <header className="flex items-center gap-3 p-2">
            <h3 className="text-lg font-medium text-MyColor01">
              Crie uma sub Tarefa
            </h3>
            <div>
              <Button
                type="button"
                variant="outlined"
                className="text-3xl border-none rounded-none shadow-none"
                onClick={onClose}
              >
                <AiFillCloseCircle />
              </Button>
            </div>
          </header>

          <div>
            <Label htmlFor={"nome"}>Descreva a tarefa</Label>
            <TextField id="nome" type={"text"} />
          </div>
          <div className="w-full p-2">
            <Button variant="outlined" className="w-full">
              Salvar
            </Button>
          </div>
        </CardBackground>
      </div>
    </>
  );
};

export default ModalSubTasks;
