import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/YetAnotherDiscordBotnet',
  assetPrefix: '/YetAnotherDiscordBotnet/',
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
};

export default nextConfig;