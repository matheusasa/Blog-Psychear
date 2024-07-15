import Link from "next/link";

const Sobre = () => {
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
            Creating valuable content for creatives all around the world
          </div>
          <div className="py-[16px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
