import CompanyRepositories from "../../repositories/company";

const useCompany = () => {
  const addInfoCompany = async (data: any) => {
    try {
      const resp = await CompanyRepositories.addInfoCompany(data);
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  };
  const createCompany = async (data: any) => {
    try {
      const resp = await CompanyRepositories.createProject(data);
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  };
  return { addInfoCompany, createCompany };
};

export default useCompany;
