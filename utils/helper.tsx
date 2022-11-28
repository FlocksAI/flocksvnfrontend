export const getAuthToken = () => {
  return window.localStorage.getItem("flocks_token");
};
export const removeAuth = () => {
  const accessToken = getAuthToken();
  if (accessToken) {
    window.localStorage.removeItem("flocks_token");
    window.localStorage.removeItem("logged");
    window.location.reload();
  }
};
