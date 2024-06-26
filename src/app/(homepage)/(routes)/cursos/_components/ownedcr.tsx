import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import pplmeet from "../../../../../../public/pplmeet.jpg";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const OwnedCourses = () => {
  return (
    <div>
      <div className="bg-[#bdd5ed] h-[600px] w-full">
        <div className="px-[140px] pt-[40px] font-bold text-3xl">
          Seus cursos
        </div>
        <div className="px-[140px] py-[60px] flex justify-between">
          <Card className="bg-white w-[500px] h-[320px] shadow-lg transition-transform transform hover:scale-105 hover:shadow-lg">
            <CardHeader className="px-6 pt-6 pb-3 ">
              <div className="relative w-full h-[200px]">
                <Image
                  src={pplmeet}
                  alt="Descrição da imagem"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </CardHeader>
            <CardContent>
              <div>Avatar</div>
              <div>Progress</div>
            </CardContent>
          </Card>
          <Card className="bg-white w-[500px] h-[320px] shadow-lg transition-transform transform hover:scale-105 hover:shadow-lg">
            <CardHeader className="px-6 pt-6 pb-3 ">
              {" "}
              {/* Remove padding to avoid overflow */}
              <div className="relative w-full h-[200px]">
                {" "}
                {/* Adjust height as necessary */}
                <Image
                  src={pplmeet}
                  alt="Descrição da imagem"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </CardHeader>
            <CardContent>
              <div>Avatar</div>
              <div>Progress</div>
            </CardContent>
          </Card>
          <Card className="bg-white w-[500px] h-[320px] shadow-lg transition-transform transform hover:scale-105 hover:shadow-lg">
            <CardHeader className="px-6 pt-6 pb-3 ">
              {" "}
              {/* Remove padding to avoid overflow */}
              <div className="relative w-full h-[200px]">
                {" "}
                {/* Adjust height as necessary */}
                <Image
                  src={pplmeet}
                  alt="Descrição da imagem"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </CardHeader>
            <CardContent>
              <div>Avatar</div>
              <div>Progress</div>
            </CardContent>
          </Card>
        </div>
        <div className="w-full justify-end flex pr-[80px] gap-x-2">
          <div className="gap-x-2 bg-white rounded  shadow-lg transition-transform transform hover:scale-105 hover:shadow-lg ">
            <ArrowLeft />
          </div>
          <div className="gap-x-2 bg-white rounded  shadow-lg transition-transform transform hover:scale-105 hover:shadow-lg">
            <ArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnedCourses;
