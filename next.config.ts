import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  // /apps/beatcue/privacy → /apps/beatcue/privacy/index.html 로 만들어 GitHub Pages에서 안정적으로 열리게 한다.
  trailingSlash: true,
};

export default nextConfig;
