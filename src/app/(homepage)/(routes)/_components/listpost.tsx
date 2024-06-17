interface ListPostProps {
  post: {
    attributes: {
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
          attributes: {
            url: string;
          };
        };
      };
    };
  };
}

const ListPost: React.FC<ListPostProps> = ({ post }) => {
  return (
    <div className="flex flex-col h-[150px]">
      <div className="flex">
        <div>{post.attributes.Categoria} |</div>
        <div className="pl-2">
          {new Date(post.attributes.updatedAt).toLocaleDateString()}
        </div>
      </div>
      <div className="text-xl font-bold">{post.attributes.Titulo}</div>
      <div>{post.attributes.Sumario}</div>
    </div>
  );
};

export default ListPost;
