import { ReactNode } from "react";

interface CardsDashProps {
  name: string;
  icon: ReactNode;
  content: string;
  text: string;
}

const CardsDash = ({ name, icon, content, text }: CardsDashProps) => {
  return (
    <div className="bg-white rounded-lg flex- flex-col w-64 h-40 p-6 gap-6 shadow-md">
      <div className="flex justify-between items-center ">
        <p className="text-lg font-semibold text-MyColor01">{name}</p>
        <i className="p-2 bg-purple-900 text-white rounded-sm">{icon}</i>
      </div>
      <div className="mt-1">
        <p className="font-bold text-4xl text-MyColor02">{content}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-base font-medium text-MyColor02">{text}</p>
        <span className="text-sm font-normal text-MyColor03">Completado</span>
      </div>
    </div>
  );
};

export default CardsDash;
