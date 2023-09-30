import Button from "@/components/buttons/button";
import { ReactNode } from "react";
import CardBackground from "../../components/CardBackground ";
import PriorityTag from "../../components/priorityTags";

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
    ></CardBackground>
  );
};

export default TaskCards;
