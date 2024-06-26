import React from "react";
import { Building2, CircleDollarSign, Cpu, Rocket } from "lucide-react";

// Defina a estrutura do objeto `cat` com uma interface
interface Cat {
  id: number;
  Nome: string;
  Descricao: string;
}

interface CategoryProps {
  cat: Cat[];
}

const Category: React.FC<CategoryProps> = ({ cat }) => {
  // Verificação se `cat` é um array antes de usar `map`
  if (!Array.isArray(cat)) {
    return <div className="px-[80px] pb-[125px] ">No categories available</div>;
  }

  return (
    <div className="px-[80px] pb-[125px] ">
      <div>
        <div className="flex justify-center text-3xl font-bold">
          Escolha uma categoria
        </div>
        <div className="flex justify-between w-full pt-[48px]">
          {cat.map((cat) => (
            <div
              key={cat.id} // Certifique-se de que a chave é única
              className="border w-[300px] h-FILL flex flex-col hover:bg-lavander items-center transition-transform transform hover:scale-105 hover:shadow-lg rounded-lg"
            >
              <div className="flex justify-start w-full pt-[50px] px-10">
                <Building2 />
              </div>
              <div className="flex justify-start w-full px-10 py-5 text-xl font-bold">
                {cat.Nome}
              </div>
              <div className="px-10">{cat.Descricao}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
