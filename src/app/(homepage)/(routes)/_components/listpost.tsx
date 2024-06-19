interface ListPostProps {
  post: {
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
        url: string;
      };
    };
  };
}

const ListPost: React.FC<ListPostProps> = ({ post }) => {
  return (
    <div className="flex flex-col h-[150px]  transition-transform transform hover:scale-105 hover:shadow-lg rounded-lg">
      <div className="flex px-5">
        <div>{post.Categoria} |</div>
        <div className="pl-2">
          {new Date(post.updatedAt).toLocaleDateString()}
        </div>
      </div>
      <div className="text-xl px-5 font-bold">{post.Titulo}</div>
      <div className="px-5">{post.Sumario}</div>
    </div>
  );
};

export default ListPost;
