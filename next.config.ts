import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  assetPrefix: process.env.NODE_ENV === 'development' ? undefined : '/wp-content/uploads/next',
  basePath: process.env.NODE_ENV === 'development' ? undefined : '/wp-content/uploads/next',
  /* config options here */
};

export default nextConfig;
