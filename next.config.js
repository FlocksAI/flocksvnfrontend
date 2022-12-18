/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")(["gapi-script"]);
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ["tsx", "ts", "jsx", "js"],
  trailingSlash: true,
};

module.exports = withTM(nextConfig);
