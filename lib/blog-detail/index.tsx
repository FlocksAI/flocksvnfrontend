import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Footer from "../../components/footer";
import HeaderSub from "../../components/header/head-sub";
import useGetListBlog from "../../hook/blog/useGetListBlog";
import ContentHeadBlog from "./content-head";
import DetailBlog from "./detail";
import KeepReadIndex from "./keep-read";

const BlogDetailIndex = () => {
  const router = useRouter();
  const { dataDetail, getDetailBlog } = useGetListBlog();
  useEffect(() => {
    if (router?.query?.id) {
      getDetailBlog(router.query?.id);
    }
  }, [router?.query?.id]);
  return (
    <>
      <HeaderSub>
        <ContentHeadBlog
          author={dataDetail?.author}
          modifiedAt={dataDetail?.modifiedAt}
          tags={dataDetail?.tags}
          title={dataDetail?.title}
        />
      </HeaderSub>
      <DetailBlog
        content={dataDetail?.content}
        headerImage={dataDetail?.headerImage}
      />
      <KeepReadIndex />
      <Footer />
    </>
  );
};

export default BlogDetailIndex;
