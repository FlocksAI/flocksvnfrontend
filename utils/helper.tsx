import Cookies from "js-cookie";
export const getAuthToken = () => {
  return Cookies.get("flock_auth");
};
export const removeAuth = () => {
  const accessToken = getAuthToken();
  if (accessToken) {
    Cookies.remove("flock_auth");
    Cookies.remove("logged");
    // window.location.reload();
  }
};
