const isProduction = false;

export const API = {
  IDO: {
    domain: isProduction
      ? "https://api.bombcrypto.io"
      : "https://api-test.bombcrypto.io",
  },
  vote: {
    domain: isProduction
      ? "https://api.bombcrypto.io"
      : "https://api-test.bombcrypto.io",
  },
  autopay: {
    domain: isProduction
      ? "https://api.bombcrypto.io"
      : "https://api-test.bombcrypto.io",
  },
};
