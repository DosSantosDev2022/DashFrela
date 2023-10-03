// Modal.tsx
import React from "react";
import { ReactNode } from "react";
import CardBackground from "../CardBackground ";
import Button from "@/components/buttons/button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="fixed inset-0 bg-black bg-opacity-50 p-4 flex items-center justify-center ">
        <CardBackground
          className={
            "bg-white p-6 w-[920px] max-h-[95vh] overflow-y-auto flex flex-col items-start justify-start scrollbar-thin"
          }
        >
          <div className="w-full flex items-center justify-end">
            <Button className="close" onClick={onClose}>
              fechar
            </Button>
          </div>

          {children}
        </CardBackground>
      </div>
    </div>
  );
};

export default Modal;
