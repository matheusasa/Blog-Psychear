// pages/curso/[cursoSlug]/page.tsx
import React from "react";
import { fetchcursoslug } from "@/helpers/fetch-cursos";
import CursoDetalhes from "../_components/cursodetalhes";
import { fetchCapituloDetalhes } from "@/helpers/fetch-cap";

interface Params {
  params: {
    cursoSlug: string;
  };
}

const CursoPage = async ({ params }: Params) => {
  const { cursoSlug } = params;

  // Buscar dados do curso
  const response = await fetchcursoslug(`filters[slug][$eq]=${cursoSlug}`);

  if (!response.data || response.data.length === 0) {
    return <div>Curso não encontrado</div>;
  }

  const attributes = response.data[0].attributes;
  const capitulos = attributes.capitulos.data;

  // Buscar detalhes de todos os capítulos
  const capituloPromises = capitulos.map(async (capitulo: any) => {
    try {
      const capituloDetails = await fetchCapituloDetalhes(capitulo.id);
      return {
        ...capitulo,
        aulas: capituloDetails.data.attributes.aulas.data || [], // Acessando o array de aulas
      };
    } catch (error) {
      console.error(
        `Erro ao buscar detalhes do capítulo ${capitulo.id}:`,
        error
      );
      return {
        ...capitulo,
        aulas: [],
      };
    }
  });

  // Esperar todas as promessas serem resolvidas
  const capitulosComAulas = await Promise.all(capituloPromises);

  return (
    <div className="w-full">
      <CursoDetalhes curso={attributes} capitulo={capitulosComAulas} />
    </div>
  );
};

export default CursoPage;
