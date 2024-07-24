import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import config from "@/config";

interface Props {
  recommendedCursos: any[]; // Definir o tipo apropriado para os dados dos cursos
}

const RecCourses: React.FC<Props> = ({ recommendedCursos }) => {
  return (
    <div className="bg-[#bdd5ed] w-full h-[650px] px-[140px]">
      <div className="pt-[70px] flex font-bold">
        <div className="text-2xl w-full">Recomendado para você</div>
        <div className="flex justify-end w-full">Ver todos</div>
      </div>
      <div className="flex justify-between py-10">
        {recommendedCursos.map((curso) => (
          <Card
            key={curso.id}
            className="h-[400px] w-[300px] transition-transform transform hover:scale-105 hover:shadow-lg rounded-lg"
          >
            <CardHeader>
              <div className="relative w-full h-[200px]">
                <Image
                  src={`${config.api}${curso.attributes.Thumb.data.attributes.url}`}
                  alt={curso.attributes.Thumb.data.attributes.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </CardHeader>
            <CardTitle>{curso.attributes.Nome}</CardTitle>
            <CardContent>{curso.attributes.descricao}</CardContent>
            <CardFooter>
              {curso.attributes.autor} - {curso.attributes.preco}
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="w-full justify-end flex pr-5 gap-x-2">
        <div className="gap-x-2 bg-white rounded shadow-lg transition-transform transform hover:scale-105 hover:shadow-lg p-2">
          Ir
        </div>
        <div className="gap-x-2 bg-white rounded shadow-lg transition-transform transform hover:scale-105 hover:shadow-lg p-2">
          Voltar
        </div>
      </div>
    </div>
  );
};

export default RecCourses;
