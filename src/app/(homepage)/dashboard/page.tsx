import { LogoutButton } from "@/components/custom/LogoutButton";
import OwnedCourses from "./cursos/_components/ownedcr";
import Categorys from "./cursos/_components/category";
import RecCourses from "./cursos/_components/reccourses";

export default function DashboardRoute() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <RecCourses />
    </div>
  );
}
