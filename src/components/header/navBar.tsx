import Link from "next/link";
import Button from "../button";
import LogoDark from "../logo/logo";

export default function NavBar() {
  return (
    <header className="w-full h-[72px} py-4 px-16 flex justify-between items-center  border-b border-MyColor03">
      <LogoDark />
      <div className="flex gap-2">
        <Link href={"/login"}>
          <Button>Login</Button>
        </Link>
        <Link href={"/cadastro"}>
          <Button variant="outlined">Cadastrar</Button>
        </Link>
      </div>
    </header>
  );
}

