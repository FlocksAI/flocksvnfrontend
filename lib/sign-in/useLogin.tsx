import { message } from "antd";
import { FLOCK_LOCALSTORAGE } from "../../constant/api-constant";
import LoginRepositories from "../../repositories/login";
import Cookie from "js-cookie";
import { useRouter } from "next/router";

const useLogin = () => {
  const router = useRouter();
  const loginEmailPassword = async (value: any) => {
    try {
      const resp = await LoginRepositories.loginEmailPassword(value);
      console.log(resp);
      if (!resp.data.accessToken) {
        return message.error("Đăng nhập thất bại");
      }
      Cookie.set(FLOCK_LOCALSTORAGE, resp.data.accessToken);
      router.push("/");
    } catch (error) {
      console.log(error);
      message.error("Đăng nhập thất bại, thử lại sau");
    }
  };

  const loginGoogle = async (provider: any) => {
    try {
      const frontendDomain = "https://localhost:3000/";
      const googleRedirectUriVi = `${frontendDomain}social/google`;
      const resp = await fetch(
        `https://api.flocks.vn/api/v1/auth/social/oauth_uri?provider=${provider}`
      ).then((res) => res.json());
      // console.log(resp);
      let url = resp;
      url += `&redirect_uri=${googleRedirectUriVi}`;
      // console.log(url);
      // window.open(url, "_self");
      // const resp = await LoginRepositories.loginGoogle(provider);
      // console.log(resp);
    } catch (error) {
      console.log(error);
    }
  };
  return { loginEmailPassword, loginGoogle };
};

export default useLogin;
