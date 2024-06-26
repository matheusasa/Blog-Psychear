import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import pplmeet from "../../../../../../public/pplmeet.jpg";
import Image from "next/image";

const RecCourses = () => {
  return (
    <div className="bg-[#bdd5ed] w-full h-[650px] px-[140px]">
      <div className="pt-[70px] flex font-bold  ">
        <div className="text-2xl w-full">Recomendado para você</div>
        <div className="flex justify-end w-full">Ver todos</div>
      </div>
      <div className="flex justify-between py-10">
        <Card className=" h-[400px] w-[300px] transition-transform transform hover:scale-105 hover:shadow-lg rounded-l g">
          <CardHeader>
            <div className="relative w-full h-[200px]">
              <Image
                src={pplmeet}
                alt="Descrição da imagem"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </CardHeader>
          <CardTitle>Titulo</CardTitle>
          <CardContent>Desc</CardContent>
          <CardFooter>Autor - preco</CardFooter>
        </Card>
        <Card className=" h-[400px] w-[300px] transition-transform transform hover:scale-105 hover:shadow-lg rounded-lg">
          <CardHeader>
            <div className="relative w-full h-[200px]">
              <Image
                src={pplmeet}
                alt="Descrição da imagem"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </CardHeader>
          <CardTitle>Titulo</CardTitle>
          <CardContent>Desc</CardContent>
          <CardFooter>Autor - preco</CardFooter>
        </Card>
        <Card className=" h-[400px] w-[300px] transition-transform transform hover:scale-105 hover:shadow-lg rounded-lg">
          <CardHeader>
            <div className="relative w-full h-[200px]">
              <Image
                src={pplmeet}
                alt="Descrição da imagem"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </CardHeader>
          <CardTitle>Titulo</CardTitle>
          <CardContent>Desc</CardContent>
          <CardFooter>Autor - preco</CardFooter>
        </Card>
        <Card className=" h-[400px] w-[300px] transition-transform transform hover:scale-105 hover:shadow-lg rounded-lg">
          <CardHeader>
            <div className="relative w-full h-[200px]">
              <Image
                src={pplmeet}
                alt="Descrição da imagem"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </CardHeader>
          <CardTitle>Titulo</CardTitle>
          <CardContent>Desc</CardContent>
          <CardFooter>Autor - preco</CardFooter>
        </Card>
      </div>
      <div className="w-full justify-end flex pr-5">
        <div>Ir</div>
        <div>Voltar</div>
      </div>
    </div>
  );
};

export default RecCourses;
