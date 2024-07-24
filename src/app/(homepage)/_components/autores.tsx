import config from "@/config";
import Image from "next/image";
import React from "react";

// Define the structure of the author data
interface AuthorAttributes {
  Nome: string;
  Descricao: string;
  Foto: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface Author {
  id: number;
  attributes: AuthorAttributes;
}

interface AutProps {
  aut: {
    data: Author[];
  };
}

const AuthorCard: React.FC<{ author: Author }> = ({ author }) => {
  return (
    <div className="border transition-transform transform hover:scale-105 hover:shadow-lg rounded-lg w-[300px] h-[420px] flex flex-col hover:bg-lightyellow items-center">
      <div className="flex justify-center w-full pt-[50px]">
        <Image
          src={`${config.api}${author.attributes.Foto.data.attributes.url}`} // Aqui você pode usar author.attributes.imageUrl se tiver uma URL de imagem dinâmica
          alt={author.attributes.Nome}
          width={150}
          height={150}
          className="rounded-full"
        />
      </div>
      <div className="flex justify-start w-full pl-10 py-5 text-xl font-bold">
        {author.attributes.Nome}
      </div>
      <div>{author.attributes.Descricao}</div>
    </div>
  );
};

const Autores: React.FC<AutProps> = ({ aut }) => {
  return (
    <div className="px-[80px] pb-[125px]">
      <div>
        <div className="flex justify-center text-3xl">Lista de Autores</div>
        <div className="flex flex-wrap justify-center w-full pt-[48px] gap-4">
          {aut.data.map((author) => (
            <AuthorCard key={author.id} author={author} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Autores;
