import Image from "next/image";
import { Button } from "../../../../components/ui/button";
import Link from "next/link";

const FixedPost = () => {
  return (
    <div className="px-[80px] relative pb-[126px]">
      <div className="relative z-10">
        <Image src="/pplmeet.jpg" alt="Image" width={949} height={705} />
      </div>
      <div className="absolute top-[50px] left-[900px] z-20 h-[584px] w-[806px] bg-white">
        <div className="p-[80px]">
          <div className="text-2xl pb-[24px]">WHY WE STARTED</div>
          <div className="text-5xl font-bold">
            It started out as a simple idea and evolved into our passion
          </div>
          <div className="pt-[16px] pb-[32px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip.
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
