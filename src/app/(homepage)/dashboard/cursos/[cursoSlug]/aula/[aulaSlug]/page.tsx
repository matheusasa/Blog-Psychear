"use client";
import { useRouter } from "next/navigation";
import Video from "next-video";

const AulaPage = () => {
  const router = useRouter(); // Hook de navegação

  return (
    <div>
      Aula online{" "}
      <button
        onClick={() => router.back()}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Voltar
      </button>
      <Video
        src={
          "https://strapi.mtswebsft.online/uploads/WYD_2024_07_21_19_59_48_27a1b12810.mp4"
        }
      />
      ;
    </div>
  );
};

export default AulaPage;
