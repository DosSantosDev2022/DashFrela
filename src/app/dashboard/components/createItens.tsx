"use client";
import Button from "@/components/buttons/button";
import { useState } from "react";

interface CreateItensProps {
  name: string;
  nameButton: string;
  onCreate: () => void;
}

const CreateItens = ({ name, nameButton, onCreate }: CreateItensProps) => {
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
    </div>
  );
};

export default CreateItens;
