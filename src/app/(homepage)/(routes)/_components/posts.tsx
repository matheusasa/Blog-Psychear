"use client";
import Link from "next/link";
import ListPost from "./listpost";
import config from "@/config";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import fetchBlog from "@/app/helpers/fetch-blogs";
import { useRouter } from "next/navigation";
interface PostProps {
  blogs: any;
}
const Posts: React.FC<PostProps> = ({ blogs }) => {
  const recentPost = blogs.data[blogs.data.length - 1];
  const posts = blogs.data;
  const router = useRouter();
  const RecentPostLink = (slug: string) => {
    const handleClick = () => {
      router.push(`/blog/` + slug);
    };
    return handleClick;
  };
  return (
    <div className="flex py-[128px] px-[80px]">
      <div className="">
        <div className="text-3xl font-bold pb-[32px]">Postagens recentes</div>
        <div className="w-[1140px] h-[633px] border rounded relative overflow-hidden">
          {recentPost ? (
            <div
              style={{ position: "relative", width: "100%", height: "100%" }}
            >
              <Image
                src={`${config.api}${recentPost.Thumbnail.url}`}
                alt={recentPost.Thumbnail.name}
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 ">
                <div className="flex flex-col justify-start text-white h-full px-[100px] pt-[270px]">
                  <h1 className="text-3xl font-bold">{recentPost.Titulo}</h1>
                  <p>{recentPost.Sumario}</p>
                  <div className="pt-5">
                    <Button onClick={RecentPostLink(recentPost.slug)}>
                      Saiba mais...
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            "Carregando..."
          )}
        </div>
      </div>
      <div className="pl-[40px] w-full">
        <div className="flex">
          <div className="text-3xl font-bold pb-[32px] w-full">
            Todas as postagens
          </div>
          <div className="flex justify-end w-full">
            <Link href="/blog">Ver todos</Link>
          </div>
        </div>
        {posts.length > 0 ? (
          posts
            .slice(Math.max(posts.length - 5, 0), posts.length - 1)
            .reverse()
            .map((post: any) => (
              <Link href={`/blog/${post.slug}`}>
                <ListPost key={post.id} post={post} />
              </Link>
            ))
        ) : (
          <div>Carregando...</div>
        )}
      </div>
    </div>
  );
};

export default Posts;
