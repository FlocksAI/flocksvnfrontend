import LoginRepositories from "../../repositories/login";

const useSignUp = () => {
  const signUpEmailPassword = async (data: any) => {
    try {
      await LoginRepositories.signUpEmailPassword(data);
    } catch (error) {
      console.log(error);
    }
  };
  return { signUpEmailPassword };
};

export default useSignUp;
