import { useEffect, useState } from "react";
import ProjectRepositorie from "../../repositories/project";

export default function useProject() {
  const [dataProject, setDataProject] = useState([]);
  const [count, setCount] = useState();
  const [page, setPage] = useState<number>(1);
  const [pageSize] = useState<number>(10);
  useEffect(() => {
    fetchData();
  }, [page]);
  const fetchData = async () => {
    try {
      const params =
        `expand=cover_image&page_size=${pageSize}&page=${page}` as any;
      const resp = await ProjectRepositorie.getListProject(params);
      setCount(resp.data?.count);
      setDataProject(resp.data.results);
    } catch (error) {
      console.log("Fetch Data Project Error", error);
    }
  };
  return { dataProject, count, setPage };
}
