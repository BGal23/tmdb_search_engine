import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bg-desktop": "url('/images/bg-desktop.jpg')",
        "bg-tablet": "url('/images/bg-tablet.jpg')",
        "bg-mobile": "url('/images/bg-mobile.jpg')",
        "gradient-section-name":
          "linear-gradient(90deg, rgba(185, 0, 0, 0.4), black 90%)",
      },
      margin: {
        "scroll-mt-20": "20px",
        "scroll-mt-18": "18px",
        "scroll-mt-16": "16px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};
export default config;
