import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    qualities: [25, 50, 75, 100],
    deviceSizes: [375, 640, 1440]
  }
};

export default nextConfig;
