/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: [
      'i.imgur.com',
      'ak-cache.legacy.net',
      'requiem-dashboard-media.s3.amazonaws.com',
    ],
  },
};

module.exports = nextConfig;
