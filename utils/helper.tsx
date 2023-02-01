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

export const getLanguage = () => {
  const splitPathName = typeof window !== "undefined" && window?.location?.pathname?.split("/");
  const lang = splitPathName[1] == "en" ? "en" : "vi";
  return lang;
}