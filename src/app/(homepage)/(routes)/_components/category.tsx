import { Building2, CircleDollarSign, Cpu, Rocket } from "lucide-react";

const Category = () => {
  return (
    <div className="px-[80px] pb-[125px] ">
      <div>
        <div className=" flex justify-center text-3xl">Choose A Catagory</div>
        <div className="flex justify-between w-full pt-[48px]">
          <div className="border rounded w-[300px] h-[220px] flex flex-col hover:bg-lavander items-center">
            <div className="flex justify-start w-full pt-[50px] pl-10">
              <Building2 />
            </div>
            <div className="flex justify-start w-full pl-10 py-5 text-xl font-bold">
              Business
            </div>
            <div className="pl-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.!
            </div>
          </div>
          <div className="border rounded w-[300px] h-[220px] hover:bg-lavander transition flex flex-col items-center">
            <div className="flex justify-start w-full pt-[50px] pl-10">
              <Rocket />
            </div>
            <div className="flex justify-start w-full pl-10 py-5 text-xl font-bold">
              Startup
            </div>
            <div className="pl-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.!
            </div>
          </div>
          <div className="border rounded w-[300px] h-[220px] flex flex-col hover:bg-lavander items-center">
            <div className="flex justify-start w-full pt-[50px] pl-10">
              <CircleDollarSign />
            </div>
            <div className="flex justify-start w-full pl-10 py-5 text-xl font-bold">
              Economy
            </div>
            <div className="pl-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.!
            </div>
          </div>
          <div className="border rounded w-[300px] h-[220px] flex flex-col hover:bg-lavander items-center">
            <div className="flex justify-start w-full pt-[50px] pl-10">
              <Cpu />
            </div>
            <div className="flex justify-start w-full pl-10 py-5 text-xl font-bold">
              Technology
            </div>
            <div className="pl-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
