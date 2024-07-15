import config from "@/config";
import Image from "next/image";

interface CardProps {
  blog: any;
}

const CardPost: React.FC<CardProps> = ({ blog }) => {
  const {
    categoria_blog,
    Titulo,
    createdAt,
    updatedAt,
    Sumario,
    Destaque,
    Conteudo,
    slug,
    Thumbnail,
    ImagemContent,
  } = blog.attributes;

  const categorias = blog.categorias;
  console.log(categorias);

  return (
    <div className="py-[32px] flex h-[420px] transition-transform transform hover:scale-105 px-5 hover:shadow-lg rounded-lg">
      <div className="w-[600px] flex items-center">
        <Image
          src={`${config.api}${ImagemContent.data.attributes.url}`}
          alt="alt"
          width={500}
          height={100}
        />
      </div>
      <div className="pl-[64px] py-[64px]">
        <div className="text-2xl font-bold">
          {categoria_blog.data.attributes.Nome}
        </div>
        <div className="text-3xl font-bold">{Titulo}</div>
        <div className="text-xl">{Sumario}</div>
      </div>
    </div>
  );
};
export default CardPost;
