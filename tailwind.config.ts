// types
import type { Config } from "tailwindcss";

// utils
import { shadcnPreset } from "./src/lib/theme/shadcnPreset";

const config = {
  presets: [shadcnPreset],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "400px",
      },
      keyframes: {
        marquee: {
          to: {
            transform: "translateX(-50%)",
          },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
} satisfies Config;

export default config;
