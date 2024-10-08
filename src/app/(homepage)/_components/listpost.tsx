interface ListPostProps {
  post: any;
}

const ListPost: React.FC<ListPostProps> = ({ post }) => {
  return (
    <div className="flex flex-col h-[150px]  transition-transform transform hover:scale-105 hover:shadow-lg rounded-lg">
      <div className="flex px-5 pt-5">
        <div>{post.categoria_blog.Nome} |</div>
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
