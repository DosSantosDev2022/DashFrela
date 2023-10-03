"use client";
import React, { useState } from "react";
import Button from "@/components/buttons/button";
import Modal from "../components/modal/modal";

interface CreateItemsProps {
  name: string;
  nameButton: string;
  modalContent: React.ReactNode;
}

const CreateItems = ({ name, nameButton, modalContent }: CreateItemsProps) => {
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

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {modalContent}
      </Modal>
    </div>
  );
};

export default CreateItems;
