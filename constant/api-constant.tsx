const isProduction = false;

export const API = {
  autopay: {
    domain: isProduction
      ? "https://api.flocks.vn/api/v1/"
      : "https://api.flocks.vn/api/v1/",
  },
};
