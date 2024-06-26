import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.jpeg";

const NavBar = () => {
  return (
    <div className="bg-gray-900 h-[80px] w-full flex  items-center text-white ">
      <div className="pl-[83px] ">
        <Link href="/">
          <Image
            src={logo}
            alt="alt"
            width={60}
            height={60}
            className="rounded-full"
          />
        </Link>
      </div>
      <div className="flex justify-end items-center w-full px-5">
        <div className="px-5">
          <Link href="/">Home</Link>{" "}
        </div>
        <div className="px-5">
          <Link href="/cursos">Cursos</Link>
        </div>
        <div className="px-5">
          <Link href="/blog">Blog</Link>{" "}
        </div>
        <div className="px-5">
          <Link href="/sobre-nos">Sobre nós</Link>
        </div>
        <div className="px-5">Entre em contato</div>
        <Button variant="secondary">Agendar</Button>
      </div>
    </div>
  );
};

export default NavBar;
