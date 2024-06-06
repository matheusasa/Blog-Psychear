import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import Category from "./_components/category";
import Feedback from "./_components/feedback";
import Posts from "./_components/posts";
import Sobre from "./_components/aboutus";
import FixedPost from "./_components/fixedpost";
import Autores from "./_components/autores";

export default function Home() {
  return (
    <div className="">
      <NavBar />
      <div className="w-full h-[720px]"></div>
      <Posts />
      <Sobre />
      <Category />
      <FixedPost />
      <Autores />
      <Feedback />
      <Footer />
    </div>
  );
}
