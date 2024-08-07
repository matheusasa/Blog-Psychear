"use client";
import { useParams } from "next/navigation";
import AulaComponent from "./_components/aulapage";
import { fetchuni, fetchunit } from "@/helpers/fetch-uni";

const AulaPage = async () => {
  const { cursoSlug, aulaSlug } = useParams();
  const cursoinfo = await fetchuni("cursos", `filters[slug][$eq]=${cursoSlug}`);
  const aulainfo = await fetchuni("aulas", `filters[slug][$eq]=${aulaSlug}`);
  console.log(aulainfo);
  const capituloinfo = await fetchunit(
    "capitulos",
    `populate=*&filters[aulas][slug][$contains]=${aulainfo.data[0].attributes.slug}`
  );
  return (
    <div>
      <AulaComponent
        infoaula={aulainfo}
        infocurso={cursoinfo}
        infocapi={capituloinfo}
      />
    </div>
  );
};

export default AulaPage;
