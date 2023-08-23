import Image from "next/image";

const LogoDark = () => {
  return (
    <div>
      <Image
        width={250}
        height={60}
        src={"/Logo-Dark.svg"}
        alt="Logo Dark DashFrela"
      />
    </div>
  );
};

export default LogoDark;
