import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export const CursoCard = ({ curso }: { curso: any }) => {
  return (
    <Card className="h-[400px] w-[300px] transition-transform transform hover:scale-105 hover:shadow-lg rounded-lg">
      <CardHeader>
        <div className="relative w-full h-[200px]">
          {curso.Thumb && curso.Thumb.data && curso.Thumb.data.length > 0 ? (
            <Image
              src={curso.Thumb.data[0].attributes.url}
              alt={curso.Thumb.data[0].attributes.name}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          ) : (
            <div className="bg-gray-200 w-full h-full rounded-lg flex items-center justify-center">
              Sem Imagem
            </div>
          )}
        </div>
      </CardHeader>
      <CardTitle>{curso.Nome}</CardTitle>
      <CardContent>{curso.descricao}</CardContent>
      <CardFooter>
        {curso.autor} - {curso.preco}
      </CardFooter>
    </Card>
  );
};
