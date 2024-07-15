import { LogoutButton } from "@/components/custom/LogoutButton";
import OwnedCourses from "./cursos/_components/ownedcr";
import Categorys from "./cursos/_components/category";
import RecCourses from "./cursos/_components/reccourses";
import { allfetchcursos, fetchcursos } from "@/helpers/fetch-cursos";
import { getUserMeLoader } from "@/data/services/get-user-me-loader";

export default async function DashboardRoute() {
  const user = await getUserMeLoader();
  const userData = user.data;
  const allCursosResponse = await allfetchcursos();
  const allCursos = allCursosResponse.data;

  const recommendedCursos = allCursos.filter(
    (curso: any) =>
      !userData.cursos.some((userCurso: any) => userCurso.id === curso.id)
  );

  const cursosDetails: any[] = [];

  // Função para buscar detalhes de um curso específico e armazenar em cursosDetails
  const fetchAndStoreCursoDetails = async (cursoId: number) => {
    try {
      const cursoDetails = await fetchcursos(cursoId);
      if (cursoDetails) {
        cursosDetails.push(cursoDetails.data);
      }
    } catch (error) {
      console.error(`Erro ao buscar detalhes do curso ${cursoId}:`, error);
    }
  };

  // Loop for para buscar detalhes de cada curso recomendado
  for (let i = 0; i < recommendedCursos.length; i++) {
    await fetchAndStoreCursoDetails(recommendedCursos[i].id);
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <RecCourses recommendedCursos={cursosDetails} />
    </div>
  );
}
