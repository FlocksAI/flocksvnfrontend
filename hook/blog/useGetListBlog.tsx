import { useState } from "react";
import BlogRepositorie from "../../repositories/blog";

export default function useGetListBlog() {
  const [page, setPage] = useState<number>(1);
  const [count, setCount] = useState();
  const [dataBlog, setDataBlog] = useState([]);
  const [dataDetail, setDataDetail] = useState() as any;

  const getListBlog = async (pageSize: number) => {
    try {
      const formatParams = `expand=header_image,author,author.avatar&page=${page}&page_size=${pageSize}`;
      const resp = await BlogRepositorie.getListBlog(formatParams);
      if (resp.status === 200) {
        setCount(resp.data?.count);
        return setDataBlog(resp.data?.results);
      }
      return;
    } catch (error) {
      console.log(error);
    }
  };

  const getRelatedPosts = async (pageSize: number, slug: any) => {
    try {
      const formatParams = `expand=header_image,author,author.avatar&page_size=${pageSize}`;
      const resp = await BlogRepositorie.getRelatedBlog(formatParams, slug);
      if (resp.status === 200) {
        return setDataBlog(resp.data);
      }
      return;
    } catch (error) {
      console.log(error);
    }
  };

  const getDetailBlog = async (slug: any) => {
    try {
      const formatParams = `expand=header_image,author,author.avatar`;
      const resp = await BlogRepositorie.getDetailBlog(formatParams, slug);
      console.log(resp);
      if (resp.status === 200) {
        return setDataDetail(resp.data);
      }
      return;
    } catch (error) {
      console.log(error);
    }
  };
  return {
    dataBlog,
    dataDetail,
    count,
    setPage,
    getListBlog,
    getRelatedPosts,
    getDetailBlog,
  };
}
