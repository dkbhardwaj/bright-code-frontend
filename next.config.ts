import type { NextConfig } from "next";

const wpUrl = process.env.NEXT_PUBLIC_WP_GRAPHQL_URL ? new URL(process.env.NEXT_PUBLIC_WP_GRAPHQL_URL)  : null;
  

const nextConfig: NextConfig = {
  images: {
    remotePatterns: wpUrl
      ? [
          {
            protocol: wpUrl.protocol.slice(0, -1) as 'https' | 'http',
            hostname: wpUrl.hostname || '',
          },
        ]
      : [],
  },
};

export default nextConfig;
