import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import CardPost from "../_components/cardpost"; // Ajuste o caminho conforme necessário

interface BlogListProps {
  blogs: any;
  currentPage: number;
  postsPerPage: number;
  paginate: (pageNumber: number) => void;
}

const BlogList = ({
  blogs,
  currentPage,
  postsPerPage,
  paginate,
}: BlogListProps) => {
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="pt-[64px] px-[80px]">
      <div className="text-4xl font-bold pb-[32px]">Todas as postagens</div>
      <div className="border w-full"></div>
      {blogs.length > 0 ? (
        currentPosts.map((blog: any) => (
          <Link href={`/blog/${blog.slug}`} key={blog.id}>
            <CardPost blog={blog} />
          </Link>
        ))
      ) : (
        <div>Carregando...</div>
      )}
      <div className="flex items-center justify-center py-[64px]">
        <div className="px-5 text-3xl">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ArrowLeft />
          </button>
        </div>
        <div className="px-5 text-3xl">
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={indexOfLastPost >= blogs.length}
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
