interface ListPostProps {
  post: any;
}

const ListPost: React.FC<ListPostProps> = ({ post }) => {
  console.log(post.attributes.categoria_blog.data.attributes.Nome);
  console.log(post.attributes.updatedAt);
  console.log(post.attributes.Titulo);
  console.log(post.attributes.Sumario);
  return (
    <div className="flex flex-col h-[150px]  transition-transform transform hover:scale-105 hover:shadow-lg rounded-lg">
      <div className="flex px-5 pt-5">
        <div>{post.attributes.categoria_blog.data.attributes.Nome} |</div>
        <div className="pl-2">
          {new Date(post.attributes.updatedAt).toLocaleDateString()}
        </div>
      </div>
      <div className="text-xl px-5 font-bold">{post.attributes.Titulo}</div>
      <div className="px-5">{post.attributes.Sumario}</div>
    </div>
  );
};

export default ListPost;
