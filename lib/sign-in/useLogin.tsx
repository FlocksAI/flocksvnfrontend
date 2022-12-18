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

  const loginGoogle = async (provider: any) => {
    try {
      const frontendDomain = "https://localhost:3000/";
      const googleRedirectUriVi = `${frontendDomain}social/google`;
      console.log(provider);
      const resp = await fetch(
        `https://api.flocks.vn/api/v1/auth/social/oauth_uri?provider=${provider}`
      ).then((res) => res.json());
      console.log(resp);
      let url = resp;
      url += `&redirect_uri=${googleRedirectUriVi}`;
      window.open(url, "_self");
      // const resp = await LoginRepositories.loginGoogle(provider);
      // console.log(resp);
    } catch (error) {
      console.log(error);
    }
  };
  return { loginEmailPassword, loginGoogle };
};

export default useLogin;
