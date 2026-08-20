import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [new URL("https://swiperjs.com/demos/images/**")],
  },
};

export default nextConfig;
