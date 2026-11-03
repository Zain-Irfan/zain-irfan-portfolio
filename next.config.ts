import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Screenshots for apps published on the Shopify App Store.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
        pathname: "/app-store/listing_images/**",
      },
    ],
  },
};

export default nextConfig;
