import { ReactNode } from "react";

interface CardBackgroundProps {
  children: ReactNode;
  className: string;
}

const CardBackground = ({ children, className }: CardBackgroundProps) => {
  const cardClasses = `bg-white rounded-md p-6 shadow-lg  flex justify-between items-center ${
    className || ""
  }`;

  return <div className={cardClasses}>{children}</div>;
};

export default CardBackground;
