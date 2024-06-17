interface BlogPostAttributes {
  Titulo: string;
  createdAt: string;
  updatedAt: string;
  Sumario: string;
  Destaque: boolean;
  Conteudo: string;
  Categoria: string;
  slug: string;
  Thumbnail: {
    data: {
      id: number;
      attributes: {
        name: string;
        url: string;
      };
    };
  };
  ImagemContent: {
    data: {
      id: number;
      attributes: {
        name: string;
        url: string;
      };
    };
  };
}
interface BlogPost {
  id: number;
  attributes: BlogPostAttributes;
}
