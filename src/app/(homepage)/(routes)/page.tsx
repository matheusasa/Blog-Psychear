import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import Category from "./_components/category";
import Feedback from "./_components/feedback";
import Posts from "./_components/posts";
import Sobre from "./_components/aboutus";
import FixedPost from "./_components/fixedpost";
import Autores from "./_components/autores";
import fetchBlog from "@/app/helpers/fetch-blogs";
import fetchCat from "@/app/helpers/fetch-cat";

export default async function Home() {
  const blogs = await fetchBlog(`filters[Destaque][$eq]=true`);
  const cat = await fetchCat();

  return (
    <div className="">
      <NavBar />
      <div className="w-full h-[720px]"> POST DESTAQUE PRINCIPAL</div>
      <Posts blogs={blogs} />
      <Sobre />
      <Category cat={cat.data} />
      <FixedPost />
      <Autores />
      <Feedback />
      <Footer />
    </div>
  );
}
