import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import Category from "./_components/category";
import Feedback from "./_components/feedback";
import Posts from "./_components/posts";
import Sobre from "./_components/aboutus";
import FixedPost from "./_components/fixedpost";
import Autores from "./_components/autores";
import fetchBlog from "@/helpers/fetch-blogs";
import fetchCat from "@/helpers/fetch-cat";
import CarouselDemo from "./_components/carrosel";

export default async function Home() {
  const blogs = await fetchBlog(`filters[Postado][$eq]=true`);
  const blogs1 = await fetchBlog(`filters[Destaque][$eq]=true`);
  const cat = await fetchCat();

  return (
    <div className="">
      <NavBar />
      <CarouselDemo blogs={blogs1} />
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
