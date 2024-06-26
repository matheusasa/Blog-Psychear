import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import OwnedCourses from "./_components/ownedcr";
import Categorys from "./_components/category";
import RecCourses from "./_components/reccourses";

const CoursePage = () => {
  return (
    <div>
      <NavBar />
      <OwnedCourses />
      <Categorys />
      <RecCourses />
      <Footer />
    </div>
  );
};

export default CoursePage;
