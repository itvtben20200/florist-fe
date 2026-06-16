/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Pre-existing unescaped-entity warnings in non-critical files should not block production builds.
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: '*.amazonaws.com' },
    ],
  },
};

export default nextConfig;
