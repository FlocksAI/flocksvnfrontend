/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")(["gapi-script"]);
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ["tsx", "ts", "jsx", "js"],
  trailingSlash: true,
  images: {
    domains: ["uploads.flocks.vn", "uploads.flocks.vnundefined"],
  },
};

module.exports = withTM(nextConfig);
