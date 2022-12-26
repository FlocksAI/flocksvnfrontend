const isProduction = false;

export const API = {
  autopay: {
    domain: isProduction
      ? "https://api.flocks.vn/api/v1/"
      : "https://api.flocks.vn/api/v1/",
  },
};

export const CLIENT_ID =
  "327665832968-873rg5kfbd0ljvutkhe0v895102kk6il.apps.googleusercontent.com";

export const FLOCK_LOCALSTORAGE = "flock_auth";

export const URL_IMAGE = "https://uploads.flocks.vn";

export const API_KEY = "vaiDTsb0.S7XRhUacCPkyXaBGPt0vUA5QLddEBmn8";

export const MEDIA_PUBLIC = "https://uploads.flocks.vn";
