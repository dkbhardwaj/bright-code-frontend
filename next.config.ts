import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dev-bright-codeio.pantheonsite.io',
      },
    ],
  },
};

export default nextConfig;
