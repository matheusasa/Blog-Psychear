import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">About</h3>
            <p className="text-gray-400">
              This is a psychology blog dedicated to providing insightful
              articles and research on various topics in the field of
              psychology.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Links rapidos</h3>
            <ul className="space-y-2">
              <li>
                <Link className="hover:underline" href="#">
                  Categorias
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="#">
                  Sobre
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="#">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Se inscrever</h3>
            <form className="flex items-center space-x-2">
              <Input
                className="flex-1 bg-gray-800 border-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:bg-gray-950 dark:focus:ring-gray-300 dark:focus:ring-offset-gray-950"
                placeholder="Coloque seu email"
                type="email"
              />
              <Button type="submit">Se inscrever</Button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          © 2024 Psychology Blog. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
