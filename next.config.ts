import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/mestizo.art",
  assetPrefix: "/mestizo.art",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
