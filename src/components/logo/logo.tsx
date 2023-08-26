import Image from "next/image";

const LogoDark = () => {
  return (
    <div className="relative w-[300px] h-[60px]">
      <Image
        src={"/Logo-Dark.svg"}
        alt="Logo Dark DashFrela"
        fill
        style={{ objectFit: "contain" }}
      />
    </div>
  );
};

export default LogoDark;
