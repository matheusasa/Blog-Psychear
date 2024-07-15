"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Image from "next/image";
import config from "@/config";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface PostProps {
  blogs: any;
}

const CarouselDemo: React.FC<PostProps> = ({ blogs }) => {
  const recentPosts = blogs.data; // Seleciona todos os posts
  const router = useRouter();
  const RecentPostLink = (slug: string) => () => {
    router.push(`/blog/${slug}`);
  };

  if (!recentPosts || recentPosts.length === 0) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="h-[720px] w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 10000 }}
        navigation
        pagination={{ clickable: true }}
        slidesPerView={1} // Adicionado para garantir 1 slide por view
      >
        {recentPosts.map((post: any) => (
          <SwiperSlide key={post.id}>
            <div className="relative w-full h-full">
              <Image
                src={`${config.api}${post.attributes.ImagemContent.data.attributes.url}`}
                alt={post.attributes.ImagemContent.data.attributes.name}
                fill
                style={{ objectFit: "cover" }} // Atualizado para a nova sintaxe
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
                <div className="text-white p-10 px-[300px]">
                  <h1 className="text-3xl font-bold">
                    {post.attributes.Titulo}
                  </h1>
                  <p className="mt-4">{post.attributes.Sumario}</p>
                  <div className="pt-5">
                    <Button onClick={RecentPostLink(post.attributes.slug)}>
                      Saiba mais...
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselDemo;
