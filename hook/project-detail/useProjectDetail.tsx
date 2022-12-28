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
      const params =
        "?expand=logo_image,cover_image,company_category,company_present_team_member,company_present_team_member.image,present_details,present_documents,present_documents.file";
      const resp = await ProjectRepositorie.getProjectDetail(
        router.query?.id,
        params
      );
      setDataProject(resp.data);
    } catch (error) {
      console.log("Fetch Data Project Error", error);
    }
  };
  return { dataProject };
}
