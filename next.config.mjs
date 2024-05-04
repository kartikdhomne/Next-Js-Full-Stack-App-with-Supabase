/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i5.walmartimages.com",
      },
      {
        protocol: "https",
        hostname: "bnvyjtexrucyruascdbp.supabase.co",
      },
    ],
  },
};

export default nextConfig;
