import OwnedCourses from "./_components/ownedcr";
import Categorys from "./_components/category";
import { getUserMeLoader } from "@/data/services/get-user-me-loader";
import { allfetchcursos, fetchcursos } from "@/helpers/fetch-cursos";
import RecCourses from "./_components/reccourses";

const CoursePage = async () => {
  const user = await getUserMeLoader();
  const userData = user.data;
  console.log(userData);

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
    <div>
      <OwnedCourses />
      <Categorys />
      <RecCourses recommendedCursos={cursosDetails} />
    </div>
  );
};

export default CoursePage;
