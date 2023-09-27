import Button from "@/components/buttons/button";
import { ReactNode } from "react";
import CardBackground from "../../components/CardBackground ";
import PriorityTag from "./priorityTags";

interface TaskCardsProps {
  name: string;
  icon: ReactNode;
  btnName: string;
  namePriority: string;
}

const TaskCards = ({ name, icon, btnName, namePriority }: TaskCardsProps) => {
  return (
    <CardBackground
      className={"w-80 h-32 cursor-pointer hover:scale-105 transition-all"}
    >
      <div className="flex items-center justify-around gap-3 w-full">
        <i className="text-2xl">{icon}</i>
        <div className="flex flex-col space-y-2 w-full">
          <p className="text-MyColor02 font-medium text-md">{name}</p>
          <div className="bg-gray-200 h-3 w-1/2">
            <div className="bg-blue-500 h-full w-1/2 p-1"></div>
          </div>
          <PriorityTag namePriority={namePriority} />
        </div>
        <Button>{btnName}</Button>
      </div>
    </CardBackground>
  );
};

export default TaskCards;
