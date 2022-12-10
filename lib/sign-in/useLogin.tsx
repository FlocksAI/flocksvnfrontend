import { message } from "antd";
import { FLOCK_LOCALSTORAGE } from "../../constant/api-constant";
import LoginRepositories from "../../repositories/login";

const useLogin = () => {
  const loginEmailPassword = async (value: any) => {
    try {
      const resp = await LoginRepositories.loginEmailPassword(value);
      if (resp.status !== 200) {
        return message.error("Đăng nhập thất bại");
      }
      localStorage.setItem(FLOCK_LOCALSTORAGE, resp.data.token);
    } catch (error) {
      console.log(error);
      message.error("Đăng nhập thất bại, thử lại sau");
    }
  };

  const loginGoogle = async (provider: string) => {
    try {
      const resp = await LoginRepositories.loginEmailPassword(provider);
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  };
  return { loginEmailPassword, loginGoogle };
};

export default useLogin;
