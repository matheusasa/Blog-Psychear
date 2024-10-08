import config from "@/config";
import { fetchcursos } from "@/helpers/fetch-cursos";
import { getUserMeLoader } from "@/data/services/get-user-me-loader";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

const OwnedCourses = async () => {
  const user = await getUserMeLoader();
  const userData = user.data;

  // Função para buscar os detalhes dos cursos
  const fetchAllCourses = async () => {
    const coursesPromises = userData.cursos.map(
      (curso: any) => fetchcursos(curso.id) // Corrigido: retornar a promessa
    );
    return Promise.all(coursesPromises); // Espera todas as promessas
  };

  const allCourses = await fetchAllCourses();

  return (
    <div>
      <div className="bg-[#bdd5ed] h-[600px] w-full">
        <div className="lg:px-[140px] flex justify-center pt-[40px] font-bold text-3xl">
          Seus cursos
        </div>

        <div className="lg:px-[140px] py-[60px] sm:flex justify-center flex lg:justify-between">
          {allCourses.map((cursoData: any) => (
            <Link
              href={`/dashboard/cursos/${cursoData.data.attributes.slug}`}
              key={cursoData.id}
            >
              <Card
                key={cursoData.data.id}
                className="bg-white w-[500px] h-[320px] shadow-lg transition-transform transform hover:scale-105 hover:shadow-lg"
              >
                <CardHeader className="px-6 pt-6 pb-3 ">
                  <div className="relative w-full h-[200px]">
                    <Image
                      src={`${config.api}${cursoData.data.attributes.Thumb.data.attributes.url}`}
                      alt={`Imagem do curso ${cursoData.data.attributes.Nome}`}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                </CardHeader>
                <CardContent>
                  <div>{cursoData.data.attributes.Nome}</div>
                  <div>Avatar</div>
                  <div>Progress</div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OwnedCourses;
