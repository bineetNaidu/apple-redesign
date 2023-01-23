/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'rb.gy',
      'github.com',
      'gravatar.com',
      'raw.githubusercontent.com',
      'drive.google.com',
    ],
  },
};

module.exports = nextConfig;
