import type { NextConfig } from "next";
import path from "path";

// O arrumasite integra este site em arrumasite.com/farmacia-violeta: o script de
// integração builda com NEXT_BASE_PATH=/farmacia-violeta e publica a pasta out/.
// Sem a variável (dev local, domínio próprio), o site roda na raiz.
const basePath = process.env.NEXT_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  images: { unoptimized: true },
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
