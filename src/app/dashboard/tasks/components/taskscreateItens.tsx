"use client";
import Button from "@/components/buttons/button";
import { useState } from "react";
import ModalCreateTask from "./modal/modalCreateTask";

interface CreateItensTasksProps {
  name: string;
  nameButton: string;
}

const CreateItensTasks = ({ name, nameButton }: CreateItensTasksProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="flex items-center justify-between p-6 border">
      <p className="text-MyColor02 font-medium text-lg">{name}</p>
      <Button onClick={openModal}>{nameButton}</Button>

      {isModalOpen && <ModalCreateTask onClose={closeModal} />}
    </div>
  );
};

export default CreateItensTasks;
