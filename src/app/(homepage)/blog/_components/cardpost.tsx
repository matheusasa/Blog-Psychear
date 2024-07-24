import config from "@/config";
import Image from "next/image";

interface CardProps {
  blog: any;
}

const CardPost: React.FC<CardProps> = ({ blog }) => {
  const { categoria_blogs, Titulo, Sumario, ImagemContent } = blog.attributes;

  return (
    <div className="py-[32px] flex h-[420px] transition-transform transform hover:scale-105 px-5 hover:shadow-lg rounded-lg">
      <div className="w-[300px] flex items-center justify-center">
        <div className="relative w-full h-full max-h-[400px]">
          <Image
            src={`${config.api}${ImagemContent.data.attributes.url}`}
            alt={Titulo}
            width={300}
            height={200}
            objectFit="contain"
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="pl-[32px] py-[32px]">
        <div className="text-2xl font-bold">
          {categoria_blogs.data.attributes.Nome}
        </div>
        <div className="text-3xl font-bold">{Titulo}</div>
        <div className="text-xl">{Sumario}</div>
      </div>
    </div>
  );
};

export default CardPost;
