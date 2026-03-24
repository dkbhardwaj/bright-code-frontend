import type { NextConfig } from "next";

const wpUrl = process.env.NEXT_PUBLIC_WP_GRAPHQL_URL ? new URL(process.env.NEXT_PUBLIC_WP_GRAPHQL_URL) : null;


const nextConfig: NextConfig = {
  // @ts-ignore
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dev-bright-codeio.pantheonsite.io',
      },
      ...(wpUrl
        ? [
          {
            protocol: wpUrl.protocol.slice(0, -1) as 'https' | 'http',
            hostname: wpUrl.hostname || '',
          },
        ]
        : []),
    ],
  },
};

export default nextConfig;
