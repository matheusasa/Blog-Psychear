"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Player from "next-video/player";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import config from "@/config";
import Link from "next/link";
interface AulaProps {
  infocurso: any;
  infoaula: any;
  infocapi: any;
}

const AulaComponent: React.FC<AulaProps> = ({
  infoaula,
  infocurso,
  infocapi,
}) => {
  const router = useRouter(); // Hook de navegação
  return (
    <div className="w-full">
      <div className="h-[70px] flex justify-center items-center text-center">
        Nome da Aula {infoaula.data[0].attributes.Nome}
      </div>
      <div className="flex justify-center">
        <Player
          src={`${config.api}${infoaula.data[0].attributes.Aula.data.attributes.url}`}
          style={{ width: "800px", height: "500px", maxWidth: "700px" }}
        />
      </div>

      <div className="flex justify-center">
        <Accordion
          type="single"
          collapsible
          className="w-[100%] min-w-[400px] px-10 max-w-[800px] py-10"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>Capitulo</AccordionTrigger>
            {infocapi.data[0].attributes.aulas.data.map((aula: any) => {
              return (
                <Link key={aula.id} href={`${aula.attributes.slug}`}>
                  <AccordionContent>{aula.attributes.Nome}</AccordionContent>
                </Link>
              );
            })}
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Conteudo</AccordionTrigger>
            <AccordionContent>
              {infoaula.data[0].attributes.Descricao}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="flex justify-center pt-10">
        <button
          onClick={() => router.back()}
          className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Voltar
        </button>
      </div>
    </div>
  );
};

export default AulaComponent;
