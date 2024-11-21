import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      space: {
        "minus-1": "-0.25rem",
        "minus-2": "-0.5rem",
        "minus-3": "-0.75rem",
        "minus-4": "-1rem",
      }
    },

  },
  plugins: [],
} satisfies Config;
