import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ProjectRepositorie from "../../repositories/project";

export default function useProjectDetail() {
  const [dataProject, setDataProject] = useState() as any;
  const router = useRouter();
  useEffect(() => {
    if (router.query?.id) {
      fetchData();
    }
  }, [router.query?.id]);
  const fetchData = async () => {
    try {
      const resp = await ProjectRepositorie.getProjectDetail(router.query?.id);
      setDataProject(resp.data);
    } catch (error) {
      console.log("Fetch Data Project Error", error);
    }
  };
  return { dataProject };
}
