import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
interface FixedProps {
  noscomecamos: any;
}

const FixedPost: React.FC<FixedProps> = ({ noscomecamos }) => {
  return (
    <div className="px-[80px] relative pb-[126px]">
      <div className="relative z-10">
        <Image src="/pplmeet.jpg" alt="Image" width={949} height={705} />
      </div>
      <div className="absolute top-[50px] left-[900px] z-20 h-[584px] w-[806px] bg-white">
        <div className="p-[80px]">
          <div className="text-2xl pb-[24px]">PORQUÊ NÓS COMEÇAMOS?</div>
          <div className="text-5xl font-bold">
            {noscomecamos.data.Titulo}
          </div>
          <div className="pt-[16px] pb-[32px]">
            {noscomecamos.data.Resumo}
          </div>
          <div>
            <Button variant={"lavander"} size={"lg"}>
              <Link href="/sobre-nos">Saiba mais &gt;</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FixedPost;
