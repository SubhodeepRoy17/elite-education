import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        pathname: '/profile.png',
        search: '?'
      }
    ]
  }
};

export default nextConfig;
