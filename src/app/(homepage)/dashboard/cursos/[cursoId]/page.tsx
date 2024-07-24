import Video from "next-video";
import teste from "https://strapi.mtswebsft.online/uploads/WYD_2024_07_21_19_59_48_27a1b12810.mp4";
import { fetchcursos } from "@/helpers/fetch-cursos";
const CursoPage = async (props: any) => {
  const response = await fetchcursos(`filters[slug][$eq]=${props.params.slug}`);

  return <div>Ola {response.Nome} </div>;
};

export default CursoPage;
