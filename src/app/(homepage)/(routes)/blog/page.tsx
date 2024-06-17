import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import CardPost from "./_components/cardpost";
import fetchBlog from "@/app/helpers/fetch-blogs";
import Link from "next/link";

const BlogPage = async () => {
  const response = await fetchBlog(`filters[Destaque][$eq]=true`);
  const blogs = response.data;
  return (
    <div>
      <NavBar />
      <div className="h-[520px] p-[80px]">POST DESTAQUE</div>
      <div className="pt-[64px] px-[80px]">
        <div className="text-4xl font-bold pb-[32px]">Todas as postagens</div>
        <div className="border w-full"></div>
        {blogs.length > 0 ? (
          blogs
            .slice(Math.max(blogs.length - 5, 0), blogs.length)
            .reverse()
            .map((blog: any) => (
              <Link href={`/blog/${blog.attributes.slug}`}>
                <CardPost key={blog.id} blog={blog} />
              </Link>
            ))
        ) : (
          <div>Carregando...</div>
        )}

        <div className="flex items-center justify-center py-[64px]">
          <div className="px-5 text-3xl">Anterior</div>
          <div className="px-5 text-3xl">Proximo</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
