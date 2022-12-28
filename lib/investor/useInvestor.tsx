import { message } from "antd";
import InvestorRepositories from "../../repositories/investor";

const useInvestor = () => {
  const addInfoInvestor = async (data: any) => {
    try {
      const resp = await InvestorRepositories.addInfoInvestor(data);
      console.log(resp);
    } catch (error: any) {
      console.log(error);
      if (error?.response?.data?.detail) {
        message.error(error.response.data.detail);
      }
    }
  };
  return { addInfoInvestor };
};

export default useInvestor;
