
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "oliandcarol.com",
      },
      {
        protocol: "https",
        hostname: "cdn.shopify.com", // optional if you also pull from Shopify
      },
    ],
  },
};

export default nextConfig;
