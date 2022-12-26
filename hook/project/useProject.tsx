import { useEffect, useState } from "react";
import ProjectRepositorie from "../../repositories/project";

export default function useProject() {
  const [dataProject, setDataProject] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const params = "expand=cover_image" as any;
      const resp = await ProjectRepositorie.getListProject(params);
      setDataProject(resp.data.results);
    } catch (error) {
      console.log("Fetch Data Project Error", error);
    }
  };
  return { dataProject };
}
