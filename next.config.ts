import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [new URL("https://swiperjs.com/demos/images/**")],
  },
  // webpack(config) {
  //   config.module.rules.push({
  //     test: /\.svg$/i,
  //     use: ["@svgr/webpack"],
  //   });
  // },
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
};

export default nextConfig;
