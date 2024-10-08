import Link from "next/link";
interface SobreProps {
  mission: any;
}
const Sobre: React.FC<SobreProps> = ({ mission }) => {
  return (
    <div className="px-[80px] pb-[125px]">
      <div className="w-full border rounded bg-lavander h-[500px] flex">
        <div className="p-[80px] w-[50%]">
          <div className=" text-2xl">SOBRE NOS</div>
          <div className="text-5xl font-bold">
            We are a community of content writers who share their learnings
          </div>
          <div className="py-[16px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div className="text-2xl">
            <Link href="/sobre-nos">Saiba mais &gt;</Link>{" "}
          </div>{" "}
        </div>{" "}
        <div className="p-[80px] w-[50%]">
          <div className="text-2xl">NOSSA MISSAO</div>
          <div className="text-5xl font-bold">
            {mission.data.Titulo}
          </div>
          <div className="py-[16px]">{mission.data.Resumo}</div>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
