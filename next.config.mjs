import { withNextVideo } from "next-video/process";
const nextConfig = {
  images: {
    domains: ["strapi.mtswebsft.online"], // Adicione seu hostname aqui sem o http://
    // ou use remotePatterns para configurar padrões remotos
    // remotePatterns: [],
  },
  // Outras configurações do Next.js podem ser adicionadas aqui
};

export default withNextVideo(nextConfig);