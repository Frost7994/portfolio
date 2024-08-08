// types
import type { Config } from "tailwindcss";

// plugins
import animatePlugin from "tailwindcss-animate";
import { shadcnPlugin } from "./shadcnPlugin";

export const shadcnPreset = {
  darkMode: ["class"],
  content: [],
  plugins: [animatePlugin, shadcnPlugin],
} satisfies Config;
