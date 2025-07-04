/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["upload.wikimedia.org"], // ✅ add the external domain here
  },
};

module.exports = nextConfig;
