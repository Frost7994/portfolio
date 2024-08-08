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
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
} satisfies Config;

export default config;
