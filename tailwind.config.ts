import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      keyframes: {
        flip: {
          "0%": { transform: "rotateY(-45deg)" },
          "50%": { transform: "rotateY(45deg)" },
          "100%": { transform: "rotateY(-45deg)" },
        },
        slideLeft: {
          "0%": { transform: "translateX(100px)" },
          "100%": { transform: "translateX(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
