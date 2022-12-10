import InvestorRepositories from "../../repositories/investor";

const useInvestor = () => {
  const addInfoInvestor = async (data: any) => {
    try {
      const resp = await InvestorRepositories.addInfoInvestor(data);
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  };
  return { addInfoInvestor };
};

export default useInvestor;
