// pages/markdown.tsx
import fetchBlog from "@/app/helpers/fetch-blogs";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import config from "@/config";
import { parseMarkdown } from "@/utils/markerrender";
import Image from "next/image";

const PostPage = async (props: any) => {
  const response = await fetchBlog(`filters[slug][$eq]=${props.params.slug}`);
  const blogs = response.data[0];
  if (!blogs) return null;

  const {
    Titulo,
    createdAt,
    updatedAt,
    Sumario,
    Destaque,
    Conteudo,
    Categoria,
    slug,
    Thumbnail,
    ImagemContent,
  } = blogs.attributes;

  const htmlContent = await parseMarkdown(Conteudo);

  return (
    <div>
      <NavBar />
      <div className="h-full text-black">
        <div className="flex flex-col px-[400px]">
          <div className="flex justify-start text-2xl font-bold">
            {Categoria}
          </div>
          <div className="text-5xl font-bold">{Titulo}</div>
          <div>
            <Image
              src={`${config.api}${ImagemContent.data.attributes.url}`}
              alt={ImagemContent.data.attributes.name}
              width={1000}
              height={500}
            ></Image>
          </div>
          <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PostPage;
