import React from "react";
import Footer from "../../components/footer";
import HeaderSub from "../../components/header/head-sub";
import ContentHeadBlog from "./content-head";
import DetailBlog from "./detail";
import KeepReadIndex from "./keep-read";

const BlogDetailIndex = () => {
  return (
    <>
      <HeaderSub>
        <ContentHeadBlog />
      </HeaderSub>
      <DetailBlog />
      <KeepReadIndex />
      <Footer />
    </>
  );
};

export default BlogDetailIndex;
