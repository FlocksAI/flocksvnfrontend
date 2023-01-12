/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")(["gapi-script"]);
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ["tsx", "ts", "jsx", "js"],
  trailingSlash: true,
  images: {
    domains: [
      "54.203.235.172",
      "https://uploads.flocks.vn/undefined",
      "192.168.1.99",
      "cdn.logo.com",
      "play.google.com",
      "upload.wikimedia.org",
      "uploads.flocks.vn",
      "uploads.flocks.vnundefined",
      "https://uploads.flocks.vn",
    ],
  },
};

module.exports = withTM(nextConfig);
