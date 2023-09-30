"use client";
import Button from "@/components/buttons/button";
import { useState } from "react";
import Modal from "../../projects/components/createProject";

interface CreateItensProjectsProps {
  name: string;
  nameButton: string;
  onCreate: () => void;
}

const CreateItensProjects = ({
  name,
  nameButton,
  onCreate,
}: CreateItensProjectsProps) => {
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

      {isModalOpen && <Modal onClose={closeModal} />}
    </div>
  );
};

export default CreateItensProjects;
