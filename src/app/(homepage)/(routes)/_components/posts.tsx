import Link from "next/link";
import ListPost from "./listpost";

const Posts = () => {
  return (
    <div className="flex py-[128px] px-[80px]">
      <div className="">
        <div className="text-3xl font-bold pb-[32px]">Postagens recentes</div>
        <div className="w-[1140px] h-[633px] border rounded"></div>
      </div>
      <div className="pl-[40px]">
        <div className="flex">
          <div className="text-3xl font-bold pb-[32px] w-full">
            Todos as postagens
          </div>
          <div className="flex justify-end w-full">
            <Link href="/blog">Ver todos</Link>{" "}
          </div>
        </div>
        <ListPost />
        <ListPost />
        <ListPost />
        <ListPost />
      </div>
    </div>
  );
};

export default Posts;
