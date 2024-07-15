"use client";

import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import fetchBlog from "@/helpers/fetch-blogs";
import { useEffect, useState } from "react";
import CarouselDemo from "../_components/carrosel";
import BlogList from "./_components/bloglist";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [highlightBlogs, setHighlightBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchBlog(`filters[Postado][$eq]=true`);
      setBlogs(response.data);

      const highlightResponse = await fetchBlog(`filters[Destaque][$eq]=true`);
      setHighlightBlogs(highlightResponse.data);
    };

    fetchData();
  }, []);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <NavBar />
      <CarouselDemo blogs={{ data: highlightBlogs }} />
      <BlogList
        blogs={blogs}
        currentPage={currentPage}
        postsPerPage={postsPerPage}
        paginate={paginate}
      />
      <Footer />
    </div>
  );
};

export default BlogPage;
