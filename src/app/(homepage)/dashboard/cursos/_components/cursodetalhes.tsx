"use client";

import React, { useState } from "react";
import Link from "next/link";

interface Aula {
  id: number;
  attributes: {
    Nome: string;
    url: string;
    slug: string;
  };
}

interface CapituloProps {
  id: number;
  attributes: {
    Nome: string;
    Descricao: string;
  };
  aulas: Aula[];
}

interface CursoDetalhesProps {
  curso: {
    Nome: string;
    Descricao: string;
    slug: string; // Adicione o slug aqui
  };
  capitulo: CapituloProps[];
}

const CursoDetalhes: React.FC<CursoDetalhesProps> = ({ curso, capitulo }) => {
  const [capituloSelecionado, setCapituloSelecionado] = useState<CapituloProps>(
    capitulo[0] || {
      id: -1,
      attributes: {
        Nome: "Nenhum capítulo disponível",
        Descricao: "Nenhuma descrição disponível",
      },
      aulas: [],
    }
  );

  const handleCapituloSelecionado = (id: number) => {
    const capituloSelecionado = capitulo.find((c) => c.id === id);
    if (capituloSelecionado) {
      setCapituloSelecionado(capituloSelecionado);
    }
  };

  return (
    <div className="flex md:flex-row w-full">
      {/* Sidebar de Capítulos */}
      <aside className="w-full md:w-1/4 p-4 border-r bg-gray-50 dark:bg-gray-800 h-screen">
        <h2 className="text-xl font-semibold mb-4 pl-[70px]">Capítulos</h2>
        <ul className="list-none p-0 m-0">
          {capitulo.length > 0 ? (
            capitulo.map((cap) => (
              <li
                key={cap.id}
                onClick={() => handleCapituloSelecionado(cap.id)}
                className="cursor-pointer p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors"
              >
                {cap.attributes.Nome}
              </li>
            ))
          ) : (
            <li className="p-2">Sem capítulos disponíveis</li>
          )}
        </ul>
      </aside>

      {/* Conteúdo Principal */}
      <main className="w-full md:w-3/4 p-4">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-4 border-b pb-2">
            Bem-vindo ao curso de {curso.Nome}
          </h1>
          <p>{curso.Descricao}</p>
        </div>

        {/* Detalhes do Capítulo Selecionado */}
        <section className="mb-6">
          <h2 className="text-lg font-bold mb-2">
            Descrição do Capítulo Selecionado:
          </h2>
          <p>{capituloSelecionado.attributes.Descricao}</p>
        </section>

        {/* Lista de Aulas */}
        <section>
          <h3 className="text-xl font-semibold mb-2">Aulas:</h3>
          <ul className="list-none p-0 m-0">
            {capituloSelecionado.aulas.length > 0 ? (
              capituloSelecionado.aulas.map((aula) => (
                <li
                  key={aula.id}
                  className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors"
                >
                  <Link
                    href={`${curso.slug}/aula/${aula.attributes.slug}`}
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {aula.attributes.Nome}
                  </Link>
                </li>
              ))
            ) : (
              <li className="p-2">Sem aulas disponíveis</li>
            )}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default CursoDetalhes;
