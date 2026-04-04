import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    localPatterns: [
      {
        pathname: '/profile.png',
        search: '?'
      }
    ]
  }
};

export default nextConfig;
