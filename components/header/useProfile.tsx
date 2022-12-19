import { useEffect, useState } from "react";
import ProfileRepositories from "../../repositories/profile";

const useProfile = () => {
  const [dataMe, setDataMe] = useState() as any;
  useEffect(() => {
    getProfile();
  }, []);
  const getProfile = async () => {
    try {
      const resp = await ProfileRepositories.getProfileMe();
      if (!resp.data) {
        setDataMe();
      }
      setDataMe(resp.data);
    } catch (error) {
      setDataMe();
      console.log(error);
    }
  };
  return { dataMe };
};

export default useProfile;
