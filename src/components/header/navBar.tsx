import Link from "next/link";
import Button from "../buttons/button";
import LogoDark from "../logo/logo";

export default function NavBar() {
  return (
    <nav className="w-full h-[72px} py-4 px-16 flex justify-between items-center  border-b border-MyColor03">
      <LogoDark />
      <div className="flex items-center gap-2">
        <Link href={"/login"}>
          <Button>Login</Button>
        </Link>
        <Link href={"/cadastro"}>
          <Button variant="outlined">Cadastro</Button>
        </Link>
      </div>
    </nav>
  );
}
