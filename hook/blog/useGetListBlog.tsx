import { useState } from "react";
import BlogRepositorie from "../../repositories/blog";

export default function useGetListBlog() {
  const [page, setPage] = useState<number>(1);
  const [count, setCount] = useState();
  const [dataBlog, setDataBlog] = useState([]);
  const [dataDetail, setDataDetail] = useState() as any;

  const getListBlog = async (pageSize: number) => {
    const formatParams = `expand=header_image,author,author.avatar&page=${page}&page_size=${pageSize}`;
    const resp = await BlogRepositorie.getListBlog(formatParams);
    if (resp.status === 200) {
      setCount(resp.data?.count);
      return setDataBlog(resp.data?.results);
    }
    return;
  };

  const getRelatedPosts = async (pageSize: number, slug: any) => {
    const formatParams = `expand=header_image,author,author.avatar&page_size=${pageSize}`;
    const resp = await BlogRepositorie.getRelatedBlog(formatParams, slug);
    if (resp.status === 200) {
      return setDataBlog(resp.data);
    }
    return;
  };

  const getDetailBlog = async (slug: any) => {
    const formatParams = `expand=header_image,author,author.avatar`;
    const resp = await BlogRepositorie.getDetailBlog(formatParams, slug);
    console.log(resp);
    if (resp.status === 200) {
      return setDataDetail(resp.data);
    }
    return;
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
