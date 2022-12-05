/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   env: {
//     GOOGLE_ANALYTICS_ID: 'G-91M4CZM614'
//   }
// }

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    GOOGLE_ANALYTICS_ID: 'G-91M4CZM614'
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require("./scripts/sitemap-generator");
    }
    return config;
  }
};

module.exports = nextConfig
