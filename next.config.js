/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'vi'],
    defaultLocale: 'vi'
  },
  images: {
    domains: [
      '54.203.235.172',
      'https://uploads.flocks.vn/undefined',
      '192.168.1.99',
      'cdn.logo.com',
      "play.google.com",
      "upload.wikimedia.org",
      "uploads.flocks.vn",
      "uploads.flocks.vnundefined"
    ]
 
  }
}

module.exports = nextConfig
