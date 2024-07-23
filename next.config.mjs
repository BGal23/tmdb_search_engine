import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    defaultLocale: "en",
    locales: ["en", "pl"],
  },
  images: {
    domains: ["image.tmdb.org"],
  },
  webpack: (config) => {
    config.resolve.alias["@"] = path.join(__dirname);
    return config;
  },
};

export default nextConfig;
