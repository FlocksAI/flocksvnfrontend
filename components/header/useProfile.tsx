import { useEffect } from "react";
import ProfileRepositories from "../../repositories/profile";
const useProfile = () => {
  useEffect(() => {
    getProfile();
  }, []);
  const getProfile = async () => {
    const resp = await ProfileRepositories.getProfileMe();
    console.log(resp);
  };
  return {};
};

export default useProfile;
