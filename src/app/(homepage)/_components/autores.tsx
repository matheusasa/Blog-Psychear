import config from "@/config";
import Image from "next/image";
import React, { Key } from "react";




// Interface corrigida para os campos do autor
interface Author {
  id: Key | null | undefined;
  Nome: string;
  Foto: {
    url: string;
  };
  Descricao: string;
}

interface AutProps {
  aut: any,
  data:[]
}



const AuthorCard: React.FC<{ author: Author }> = ({ author }) => {
  return (
    <div className="border transition-transform transform hover:scale-105 hover:shadow-lg rounded-lg w-[300px] h-[420px] flex flex-col hover:bg-lightyellow items-center">
      <div className="flex justify-center w-full pt-[50px]">
        <Image
          src={`${config.api}${author.Foto.url}`} // Aqui você pode usar author.attributes.imageUrl se tiver uma URL de imagem dinâmica
          alt={author.Nome}
          width={150}
          height={150}
          className="rounded-full"
        />
      </div>
      <div className="flex justify-start w-full pl-10 py-5 text-xl font-bold">
        {author.Nome}
      </div>
      <div>{author.Descricao}</div>
    </div>
  );
};

const Autores: React.FC<AutProps> = ({ aut }) => {
  return (
    <div className="px-[80px] pb-[125px]">
      <div>
        <div className="flex justify-center text-3xl">Lista de Autores</div>
        <div className="flex flex-wrap justify-center w-full pt-[48px] gap-4">
          {aut.data.map((author: Author) => (
            <AuthorCard key={author.id} author={author} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Autores;
