// pages/markdown.tsx
import fetchBlog from "@/helpers/fetch-blogs";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import config from "@/config";
import { parseMarkdown } from "@/utils/markerrender";
import Image from "next/image";

const PostPage = async (props: any) => {
  const response = await fetchBlog(`filters[slug][$eq]=${props.params.slug}`);
  const blogs = response.data;

  if (!blogs) return null;

  const htmlContent = await parseMarkdown(blogs[0].attributes.Conteudo);

  return (
    <div>
      <NavBar />
      <div className="h-full py-[64px] text-black">
        <div className="flex flex-col px-[400px]">
          <div className="flex justify-start text-2xl font-bold">
            {blogs[0].attributes.categoria_blogs.data.attributes.Nome}
          </div>
          <div className="text-5xl font-bold ">
            {blogs[0].attributes.Titulo}
          </div>
          <div className="py-[32px]">
            <Image
              src={`${config.api}${blogs[0].attributes.ImagemContent.data.attributes.url}`}
              alt={blogs[0].attributes.ImagemContent.data.attributes.url}
              width={1000}
              height={500}
            ></Image>
          </div>
          <div className="">
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PostPage;
