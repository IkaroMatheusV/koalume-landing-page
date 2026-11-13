import type { NextConfig } from "next";

/**
 * No GitHub Pages o site fica em https://<usuario>.github.io/koalume-landing-page,
 * então o build de deploy define PAGES_BASE_PATH=/koalume-landing-page.
 * Em desenvolvimento a variável não existe e o site continua em http://localhost:3000.
 */
const basePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Gera HTML/CSS/JS estáticos na pasta `out`, que é o que o GitHub Pages serve.
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  // cacheComponents/partialPrefetching (PPR) não funcionam com `output: "export"`.
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
